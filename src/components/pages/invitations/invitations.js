import { Page } from 'components'
import { List } from './sections'
import './styles.scss'

export const Invitations = ({ authDetails }) => {
	const styles = {
		page: { content: 'invitations__page-content' }
	}
	const { organizationId } = authDetails

	return (
		<Page title="Invitations" subtitle="Get everyone onboard.">
			<List organizationId={organizationId} />
		</Page>
	)
}
