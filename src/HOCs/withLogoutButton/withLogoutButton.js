import { Fragment } from 'react'
import { FloatingButton } from 'components'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import { logOut } from 'redux/actions'
import { useDispatch } from 'react-redux'

export const withLogoutButton = WrappedComponent => {
	const WithLogoutButtonWrapper = props => {
		const dispatch = useDispatch()
		const handleOnSignOut = () => dispatch(logOut())

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
