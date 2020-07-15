import moment from 'moment'
import { intl } from 'src/i18n'
import { Typography } from 'src/components'
import './styles.scss'

export const CreatedAtCell = ({ data: { createdAt } }) => {
	const formatDate = date => moment(date).calendar()

	const styles = {
		details: { root: 'created-at-cell__details' }
	}

	return (
		<Typography classes={styles.details}>{formatDate(createdAt)}</Typography>
	)
}

export const NameCell = ({ data: { displayName } }) => {
	const styles = {
		details: { root: 'name-cell__details' }
	}

	return <Typography classes={styles.details}>{displayName}</Typography>
}

export const EmailCell = ({ data: { email } }) => {
	const styles = {
		details: { root: 'email-cell__details' }
	}

	return <Typography classes={styles.details}>{email}</Typography>
}

export const SignedUpCell = ({ data: { firstLogin } }) => {
	const signedUp = firstLogin
		? intl.pending.description
		: intl.confirmed.description

	const styles = { details: { root: 'signed-up-cell__details' } }

	return <Typography classes={styles.details}>{signedUp}</Typography>
}
