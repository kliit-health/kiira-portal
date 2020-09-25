import classnames from 'classnames'
import { Typography } from 'src/components'
import './styles.scss'

export const TextCell = ({ data, dataKey, classes = {}, style }) => {
	const styles = {
		root: classnames('text-cell', classes.root),
		details: { root: classnames('text-cell__details', classes.details) }
	}

	return (
		<div className={styles.root}>
			<Typography classes={styles.details}>{data[dataKey]}</Typography>
		</div>
	)
}
