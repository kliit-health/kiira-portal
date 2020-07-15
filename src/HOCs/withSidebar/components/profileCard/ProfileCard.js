import { Typography, Avatar } from 'src/components'
import './styles.scss'

export const ProfileCard = ({ firstName, lastName, email }) => {
	const styles = {
		card: 'profile-card',
		avatar: { root: 'profile-card__avatar' },
		details: 'profile-card__details'
	}

	return (
		<div className={styles.card}>
			<Avatar small className={styles.avatar} classes={styles.avatar} />
			<div className={styles.details}>
				<Typography white>{`${firstName} ${lastName}`}</Typography>
				<Typography white>{email}</Typography>
			</div>
		</div>
	)
}
