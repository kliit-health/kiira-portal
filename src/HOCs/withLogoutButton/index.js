import { Fragment } from 'react'
import { IconButton } from '@material-ui/core'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import { signOut } from '../../firebase'
import './styles.scss'

export const withLogoutButton = WrappedComponent => {
	const WithLogoutButtonWrapper = props => {
		const handleOnSignOut = () => {
			signOut()
		}

		return (
			<Fragment>
				<WrappedComponent {...props} />
				<div className="logout-button">
					<IconButton
						classes={{ root: 'logout-button__root' }}
						onClick={handleOnSignOut}
					>
						<ExitToAppIcon />
					</IconButton>
				</div>
			</Fragment>
		)
	}
	return WithLogoutButtonWrapper
}
