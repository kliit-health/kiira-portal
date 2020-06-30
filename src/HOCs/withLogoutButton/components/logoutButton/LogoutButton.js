import { IconButton } from '@material-ui/core'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import './styles.scss'

export const LogoutButton = ({ onClick }) => {
	return (
		<div className="logout-button">
			<IconButton classes={{ root: 'logout-button__root' }} onClick={onClick}>
				<ExitToAppIcon />
			</IconButton>
		</div>
	)
}
