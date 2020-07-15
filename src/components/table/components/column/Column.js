import classnames from 'classnames'
import './styles.scss'

export const Column = props => {
	const { children, style, classes = {}, ...rest } = props

	const styles = {
		column: classnames('table-column', classes.root),
		typography: classes.typography
	}

	return (
		<div className={styles.column} style={style}>
			{children && children(rest)}
		</div>
	)
}

Column.displayName = 'Column'
