import { useEffect, useState } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { getActiveUsers, getMoreActiveUsers } from 'src/redux/actions'
import { Page } from 'src/components'
import { List } from './sections'
import { intl } from 'src/i18n'
import './styles.scss'

export const ActiveUsers = ({ auth }) => {
	const dispatch = useDispatch()
	const { organizationId } = auth.details
	const [rendered, setRendered] = useState(0)

	const data = useSelector(state => state.activeUsers.data, shallowEqual)
	const lastDocument = useSelector(
		state => state.activeUsers.lastDocument,
		shallowEqual
	)
	const initialLoading = useSelector(state => state.activeUsers.get.loading)
	const loading = useSelector(state => state.activeUsers.more.loading)

	useEffect(() => {
		if (lastDocument === null) {
			dispatch(getActiveUsers({ organizationId }))
		}
	}, [])

	const handleLoad = (_, stopIndex) =>
		new Promise(resolve => {
			if (stopIndex >= rendered) {
				setRendered(stopIndex)

				if (!loading && lastDocument) {
					dispatch(getMoreActiveUsers({ organizationId, lastDocument }))
				}
				if (!loading) {
					resolve()
				}
			}
		})

	const styles = {
		page: { content: 'active-users__page-content' }
	}

	return (
		<Page
			classes={styles.page}
			title={intl.activeUsers.description}
			subtitle={intl.activatedKiira.description}
		>
			<List
				organizationId={organizationId}
				data={data}
				loading={initialLoading}
				loadMoreItems={handleLoad}
				isItemLoaded={index => index < rendered}
			/>
		</Page>
	)
}
