import { Avatar } from '@material-ui/core'
import { Typography } from 'components'
import './styles.scss'

export const ProfileCard = ({ firstName, lastName, email }) => (
	<div className="profile-card">
		<Avatar className="profile-card__avatar" variant="rounded" />
		<div className="profile-card__details">
			<Typography white>{`${firstName} ${lastName}`}</Typography>
			<Typography white>{email}</Typography>
		</div>
	</div>
)
