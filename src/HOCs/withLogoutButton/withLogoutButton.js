import { Fragment } from 'react'
import { logOut } from 'redux/actions'
import { useDispatch } from 'react-redux'
import { LogoutButton } from './components'

export const withLogoutButton = WrappedComponent => {
	const WithLogoutButtonWrapper = props => {
		const dispatch = useDispatch()
		const handleOnSignOut = () => dispatch(logOut())

		return (
			<Fragment>
				<WrappedComponent {...props} />
				<LogoutButton onClick={handleOnSignOut} />
			</Fragment>
		)
	}
	return WithLogoutButtonWrapper
}
