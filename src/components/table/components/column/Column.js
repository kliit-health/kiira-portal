import classnames from 'classnames'
import './styles.scss'

export const Column = props => {
	const { children, style, classes = {}, ...rest } = props

	const styles = {
		root: classnames('table-column', classes.root)
	}

	return (
		<div className={styles.root} style={style}>
			{children && children({ ...rest })}
		</div>
	)
}

Column.displayName = 'Column'
