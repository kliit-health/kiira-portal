import classnames from 'classnames'
import { Typography } from 'src/components'
import './styles.scss'

export const Header = ({ model, classes = {} }) => {
	const styles = {
		header: classnames('table-header', classes.root),
		item: classnames('table-header__item', classes.item),
		title: { root: classnames('table-header__title', classes.title) }
	}

	return (
		<div className={styles.header}>
			{model.map(({ dataKey, label, flex }) => (
				<div className={styles.item} key={dataKey} style={{ flex }}>
					<Typography>{label}</Typography>
				</div>
			))}
		</div>
	)
}
