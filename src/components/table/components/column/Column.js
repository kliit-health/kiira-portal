import { cloneElement } from 'react'
import classnames from 'classnames'
import { Typography } from 'components'
import './styles.scss'

export const Column = props => {
	const { flex, children, classes = {}, ...rest } = props

	const styles = {
		column: classnames('table-column', classes.root),
		typography: classes.typography
	}

	return (
		<div className={styles.column} style={{ flex }}>
			{children(rest)}
		</div>
	)
}
