import { Page } from 'src/components'
import { List } from './sections'
import { intl } from 'src/i18n'
import './styles.scss'

export const InactiveUsers = () => {
	const styles = {
		page: { content: 'inactive-users__page-content' }
	}

	return (
		<Page
			classes={styles.page}
			title={intl.inactiveUsers.description}
			subtitle={intl.pendingActivation.description}
		>
			<List />
		</Page>
	)
}
