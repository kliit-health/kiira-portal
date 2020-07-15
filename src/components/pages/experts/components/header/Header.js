import { Rating } from '@material-ui/lab'
import { Avatar, Typography } from 'src/components'
import { calculateRating } from 'src/helpers/functions'
import './styles.scss'

export const Header = ({
	avatarUrl,
	status,
	fullName,
	profession,
	rating,
	location
}) => {
	const isOnline = status && 'Online'

	const styles = {
		header: 'experts-profile-header',
		avatar: { root: 'experts-profile-header__avatar' },
		details: 'experts-profile-header__details',
		rating: { root: 'experts-profile-header__rating' },
		title: { root: 'experts-profile-header__title' }
	}

	return (
		<div className={styles.header}>
			<Avatar status={isOnline} url={avatarUrl} classes={styles.avatar} large />
			<div className={styles.details}>
				<Typography classes={styles.title} h5>
					{fullName}
				</Typography>
				<Typography charcoal light h6>
					{profession}
				</Typography>
				<Typography h7 gray>
					{location}
				</Typography>
				<Rating
					classes={styles.rating}
					size="large"
					readOnly
					value={calculateRating(rating)}
				/>
			</div>
		</div>
	)
}
