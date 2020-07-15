import classnames from 'classnames'
import './styles.scss'

export const Row = props => {
	const { index, children, style, classes = {} } = props

	const styles = {
		cell: classnames('table-row', classes.root),
		container: classnames('table-row__container', classes.container, {
			'table-row__container--first': index === 0
		})
	}
	return (
		<div style={style} className={styles.cell}>
			<div className={styles.container}>{children}</div>
		</div>
	)
}
