import { Page } from 'src/components'
import { List } from './sections'
import { intl } from 'src/i18n'
import './styles.scss'

export const ActiveUsers = () => {
	const styles = {
		page: { content: 'active-users__page-content' }
	}

	return (
		<Page
			classes={styles.page}
			title={intl.activeUsers.description}
			subtitle={intl.activatedKiira.description}
		>
			<List />
		</Page>
	)
}
