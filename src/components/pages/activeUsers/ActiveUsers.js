import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getActiveUsers } from 'src/redux/actions'
import { Page } from 'src/components'
import { List } from './sections'
import { intl } from 'src/i18n'
import './styles.scss'

export const ActiveUsers = ({ auth }) => {
	const { organizationId } = auth.details
	const dispatch = useDispatch()

	const loading = useSelector(state => state.activeUsers.loading)
	const data = useSelector(state => state.activeUsers.data)

	useEffect(() => {
		dispatch(getActiveUsers({ organizationId }))
	}, [])

	const styles = {
		page: { content: 'active-users__page-content' }
	}

	return (
		<Page
			classes={styles.page}
			title={intl.activeUsers.description}
			subtitle={intl.activatedKiira.description}
		>
			<List loading={loading} data={data} />
		</Page>
	)
}
