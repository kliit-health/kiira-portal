import { Page } from 'src/components'
import { List } from './sections'
import { intl } from 'src/i18n'
import './styles.scss'

export const Invitations = ({ authDetails }) => {
	const { organizationId } = authDetails
	const styles = {
		page: { content: 'invitations__page-content' }
	}

	return (
		<Page
			classes={styles.page}
			title={intl.invitations.description}
			subtitle={intl.onBoard.description}
		>
			<List organizationId={organizationId} />
		</Page>
	)
}
