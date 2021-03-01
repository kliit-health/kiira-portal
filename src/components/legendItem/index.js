import classnames from 'classnames'
import './styles.scss'

export const LegendItem = ({ classes = {}, color, label }) => {
	const styles = {
		root: classnames('legend-item', classes.root),
		box: classnames('legend-item__box', classes.box),
		label: classnames('legend-item__label', classes.label)
	}

	return (
		<div className={styles.root}>
			<div className={styles.box} style={{ background: color }} />
			<span className={styles.label}>{label}</span>
		</div>
	)
}
