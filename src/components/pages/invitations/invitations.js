import { useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { getInvitations } from 'src/redux/actions'
import { Page } from 'src/components'
import { List } from './sections'
import { intl } from 'src/i18n'
import './styles.scss'

export const Invitations = ({ auth }) => {
	const dispatch = useDispatch()
	const { organizationId } = auth.details

	const data = useSelector(state => state.invitations.data, shallowEqual)
	const loading = useSelector(state => state.invitations.loading)

	useEffect(() => {
		dispatch(getInvitations({ organizationId }))
	}, [])

	const styles = {
		page: { content: 'invitations__page-content' }
	}

	return (
		<Page
			classes={styles.page}
			title={intl.invitationsTitle.description}
			subtitle={intl.onBoard.description}
		>
			<List organizationId={organizationId} data={data} loading={loading} />
		</Page>
	)
}
