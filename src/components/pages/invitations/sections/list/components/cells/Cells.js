import moment from 'moment'
import classnames from 'classnames'
import { Typography } from 'components'
import {
	CREATED_AT,
	EMAIL,
	DISPLAY_NAME,
	SIGNED_UP_DATE
} from 'helpers/constants'
import './styles.scss'

export const CreatedAtCell = ({ data, classes = {} }) => {
	const styles = {
		details: { root: classnames('created-at-cell__details', classes.details) }
	}
	const formatDate = date => moment(date).calendar()
	const details = data[CREATED_AT]
	return <Typography classes={styles.details}>{formatDate(details)}</Typography>
}

export const NameCell = ({ data, classes = {} }) => {
	const styles = {
		details: { root: classnames('name-cell__details', classes.details) }
	}
	const details = data[DISPLAY_NAME]
	return <Typography classes={styles.details}>{details}</Typography>
}

export const EmailCell = ({ data, classes = {} }) => {
	const styles = {
		details: { root: classnames('email-cell__details', classes.details) }
	}
	const details = data[EMAIL]

	return <Typography classes={styles.details}>{details}</Typography>
}

export const SignedUpCell = ({ data, classes = {} }) => {
	const styles = {
		details: { root: classnames('signed-up-cell__details', classes.details) }
	}
	const details = data[SIGNED_UP_DATE]

	const signedUp = moment(details, 'MMM Do YY').isValid()
		? moment(data).calendar()
		: 'Pending'

	return <Typography classes={styles.details}>{signedUp}</Typography>
}
