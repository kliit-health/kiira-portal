import { Avatar } from '@material-ui/core'
import { Typography } from 'components'
import './styles.scss'

export const ProfileCard = ({ firstName, lastName, email }) => (
	<div className="profile-card">
		<Avatar className="profile-card__avatar" variant="rounded" />
		<div className="profile-card__details">
			<Typography
				secondary
				className="profile-card__name"
			>{`${firstName} ${lastName}`}</Typography>
			<Typography secondary className="profile-card__email">
				{email}
			</Typography>
		</div>
	</div>
)
