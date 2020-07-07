import classnames from 'classnames'
import { Typography } from 'components'
import './styles.scss'

export const Header = ({ model, classes = {} }) => {
	const styles = {
		header: classnames('table-header', classes.root),
		item: classnames('table-header__item', classes.item)
	}

	return (
		<div className={styles.header}>
			{model.map(({ dataKey, label, flex }) => (
				<div className={styles.item} key={dataKey} style={{ flex }}>
					<Typography h7>{label}</Typography>
				</div>
			))}
		</div>
	)
}
