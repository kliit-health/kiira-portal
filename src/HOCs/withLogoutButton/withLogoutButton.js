import { Fragment } from 'react'
import { signOut } from '../../firebase'
import { LogoutButton } from './components'

export const withLogoutButton = WrappedComponent => {
	const WithLogoutButtonWrapper = props => {
		const handleOnSignOut = () => signOut()

		return (
			<Fragment>
				<WrappedComponent {...props} />
				<LogoutButton onClick={handleOnSignOut} />
			</Fragment>
		)
	}
	return WithLogoutButtonWrapper
}
