import { FloatingButton } from 'components'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import { auth } from '../../firebase'
import styles from './withLogoutButton.module.scss'
import { Fragment } from 'react'

export const withLogoutButton = WrappedComponent => {
	const WithLogoutButtonWrapper = props => {
		const handleOnSignOut = () => auth.signOut()

		return (
			<Fragment>
				<WrappedComponent {...props} />
				<FloatingButton onClick={handleOnSignOut}>
					<ExitToAppIcon />
				</FloatingButton>
			</Fragment>
		)
	}
	return WithLogoutButtonWrapper
}
