import { Page } from 'src/components'
import { List } from './sections'
import { intl } from 'src/i18n'
import './styles.scss'

export const Invitations = () => {
	const styles = {
		page: { content: 'invitations__page-content' }
	}

	return (
		<Page
			classes={styles.page}
			title={intl.invitationsTitle.description}
			subtitle={intl.onBoard.description}
		>
			<List />
		</Page>
	)
}
