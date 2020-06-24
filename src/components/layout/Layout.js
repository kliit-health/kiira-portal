import { cloneElement } from 'react'
import {
	withLoadingIndicator,
	withRedirect,
	withLogoutButton,
	withSidebar
} from '../../HOCs'
import { compose } from 'recompose'

const Layout = ({ children, ...rest }) => {
	return cloneElement(children, { ...rest })
}

export default compose(
	withLoadingIndicator('authLoading'),
	withRedirect('/login', 'authDetails', 'authLoading'),
	withLogoutButton,
	withSidebar
)(Layout)
