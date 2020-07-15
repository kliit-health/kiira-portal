import { Typography } from 'src/components'
import { HEADER } from 'src/helpers/constants'
import model from '../model'
import './styles.scss'

export const Header = () => {
	const styles = {
		header: 'active-users-table-header',
		item: 'active-users-table-header__item',
		title: { root: 'active-users-table-header__title' },
		container: 'active-users-table-header__container',
		controls: 'active-users-table-header__controls'
	}

	return (
		<div className={styles.header}>
			<div className={styles.controls}></div>
			<div className={styles.container}>
				{model.map(({ dataKey, label, style }) => (
					<div className={styles.item} key={dataKey} style={style}>
						<Typography classes={styles.title}>{label}</Typography>
					</div>
				))}
			</div>
		</div>
	)
}

Header.displayName = HEADER
