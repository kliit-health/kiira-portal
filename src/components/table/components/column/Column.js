import { cloneElement } from 'react'
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
			{children && cloneElement(children, rest)}
		</div>
	)
}

Column.displayName = 'Column'
