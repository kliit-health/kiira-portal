import { compose } from 'recompose'
import {
	withLoadingIndicator,
	withRedirect,
	withLogoutButton,
	withSidebar
} from 'HOCs'
import { cloneElement } from 'react'

const Layout = ({ children, ...rest }) => {
	return cloneElement(children, { ...rest })
}

export default compose(
	withLoadingIndicator('authLoading'),
	withRedirect('/login', 'authDetails', 'authLoading'),
	withLogoutButton,
	withSidebar
)(Layout)
