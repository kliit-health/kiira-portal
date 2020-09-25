import classnames from 'classnames'
import moment from 'moment'
import { Typography } from 'src/components'
import './styles.scss'

export const DateCell = ({ data, dataKey, classes = {}, calendar }) => {
	const formatDate = date => {
		if (calendar) {
			return moment(date).calendar()
		} else {
			return moment(date).format('MM/DD/YYYY')
		}
	}
	const styles = {
		root: classnames('date-cell', classes.root),
		details: { root: classnames('date-cell__details', classes.details) }
	}

	const date = data[dataKey]

	return (
		<div className={styles.root}>
			<Typography classes={styles.details}>
				{date ? formatDate(data[dataKey]) : ''}
			</Typography>
		</div>
	)
}
