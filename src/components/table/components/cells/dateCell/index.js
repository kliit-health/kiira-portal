import classnames from 'classnames'
import moment from 'moment'
import { Typography } from 'src/components'
import './styles.scss'

export const DateCell = ({ data, dataKey, classes = {} }) => {
	const formatDate = date => {
		if (typeof date === 'object') {
			const key = Object.keys(date)[0]
			return moment.unix(date[key]).format('MM/DD/YYYY')
		} else if (typeof date === 'number') {
			return moment(date).format('MM/DD/YYYY')
		}
	}

	const styles = {
		root: classnames('date-cell', classes.root),
		details: { root: classnames('date-cell__details', classes.details) }
	}

	return (
		<div className={styles.root}>
			<Typography classes={styles.details}>
				{data ? formatDate(data[dataKey]) : 'invalid'}
			</Typography>
		</div>
	)
}
