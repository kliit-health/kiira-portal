import { Typography, Avatar } from 'src/components'
import './styles.scss'

export const ProfileCard = ({
	firstName,
	lastName,
	email,
	profileImageUrl
}) => {
	const styles = {
		card: 'profile-card',
		avatar: { root: 'profile-card__avatar' },
		details: 'profile-card__details',
		email: { root: 'profile-card__email' },
		name: { root: 'profile-card__name' }
	}

	return (
		<div className={styles.card}>
			<Avatar
				url={profileImageUrl}
				small
				className={styles.avatar}
				classes={styles.avatar}
			/>
			<div className={styles.details}>
				<Typography
					classes={styles.name}
					white
				>{`${firstName} ${lastName}`}</Typography>
				<Typography classes={styles.email} white>
					{email}
				</Typography>
			</div>
		</div>
	)
}
