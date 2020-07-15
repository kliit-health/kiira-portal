import classnames from 'classnames'
import { Typography } from 'src/components'
import './styles.scss'

export const TextCell = ({ data, dataKey, classes = {} }) => {
	const styles = {
		details: { root: classnames('text-cell__details', classes.details) }
	}

	return <Typography classes={styles.details}>{data[dataKey]}</Typography>
}
