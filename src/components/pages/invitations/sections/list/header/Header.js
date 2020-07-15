import { PlusIcon } from 'src/components/icons'
import { Typography, Button } from 'src/components'
import { intl } from 'src/i18n'
import { HEADER } from 'src/helpers/constants'
import model from '../model'
import './styles.scss'

export const Header = ({ onAddUsersClick, elementRef }) => {
	const styles = {
		header: 'invitations-table-header',
		item: 'invitations-table-header__item',
		title: { root: 'invitations-table-header__title' },
		controls: 'invitations-table-header__controls',
		container: 'invitations-table-header__container',
		button: { root: 'invitations-table-header__button' },
		icon: { root: 'invitations-table-header__icon' }
	}

	return (
		<div className={styles.header}>
			<div className={styles.controls}>
				<Button
					elementRef={elementRef}
					onClick={onAddUsersClick}
					classes={styles.button}
					link
				>
					<PlusIcon classes={styles.icon} />
					{intl.addUsers.description}
				</Button>
			</div>
			<div className={styles.container}>
				{model.map(({ dataKey, label, flex }) => (
					<div className={styles.item} key={dataKey} style={{ flex }}>
						<Typography classes={styles.title}>{label}</Typography>
					</div>
				))}
			</div>
		</div>
	)
}

Header.displayName = HEADER
