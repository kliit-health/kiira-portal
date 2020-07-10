import { Typography, Button } from 'components'
import { PlusIcon } from 'components/icons'
import model from '../../model'
import './styles.scss'

export const Header = ({ onAddUsersClick, elementRef }) => {
	const styles = {
		header: 'invitatios-table-header',
		item: 'invitatios-table-header__item',
		title: { root: 'invitatios-table-header__title' },
		controls: 'invitatios-table-header__controls',
		container: 'invitatios-table-header__container',
		button: { root: 'invitatios-table-header__button' },
		icon: { root: 'invitatios-table-header__icon' }
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
					Add Users
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
