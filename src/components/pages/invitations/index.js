import { useEffect, useState } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { getInvitations, getMoreInvitations } from 'src/redux/actions'
import { Page } from 'src/components'
import { List } from './sections'
import { intl } from 'src/i18n'
import './styles.scss'

export const Invitations = ({ auth }) => {
	const dispatch = useDispatch()
	const { organizationId } = auth.details
	const [rendered, setRendered] = useState(0)

	const data = useSelector(state => state.invitations.data, shallowEqual)
	const lastDocument = useSelector(
		state => state.invitations.lastDocument,
		shallowEqual
	)
	const initialLoading = useSelector(state => state.invitations.get.loading)
	const loading = useSelector(state => state.invitations.more.loading)

	useEffect(() => {
		dispatch(getInvitations({ organizationId }))
	}, [])

	const handleLoad = (_, stopIndex) =>
		new Promise(resolve => {
			if (stopIndex >= rendered) {
				setRendered(stopIndex)

				if (!loading && lastDocument) {
					dispatch(getMoreInvitations({ organizationId, lastDocument }))
				}
				if (!loading) {
					resolve()
				}
			}
		})

	const styles = {
		page: { content: 'invitations__page-content' }
	}

	return (
		<Page
			classes={styles.page}
			title={intl.invitationsTitle.description}
			subtitle={intl.onBoard.description}
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
