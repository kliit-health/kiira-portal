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
		rating: { root: 'experts-profile-header__rating' }
	}

	return (
		<div className={styles.header}>
			<Avatar status={isOnline} large url={avatarUrl} classes={styles.avatar} />
			<div className={styles.details}>
				<Typography h5>{fullName}</Typography>
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
