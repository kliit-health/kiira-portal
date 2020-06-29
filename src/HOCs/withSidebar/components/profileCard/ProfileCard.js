import { Avatar } from '@material-ui/core'
import { Typography } from 'components'
import './styles.scss'

export const ProfileCard = ({ firstName, lastName, email }) => {
	const styles = {
		card: 'profile-card',
		avatar: 'profile-card__avatar',
		details: 'profile-card__details'
	}

	return (
		<div className={styles.card}>
			<Avatar className={styles.avatar} variant="rounded" />
			<div className={styles.details}>
				<Typography white>{`${firstName} ${lastName}`}</Typography>
				<Typography white>{email}</Typography>
			</div>
		</div>
	)
}
