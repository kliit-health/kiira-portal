import { compose } from 'recompose'
import { cloneElement } from 'react'
import {
	withRedirect,
	withLogoutButton,
	withSidebar,
	withLoadingIndicator
} from 'HOCs'

const LayoutFoundation = ({ children, ...rest }) => {
	return cloneElement(children, { ...rest })
}

export const Layout = compose(
	withLoadingIndicator('authLoading'),
	withRedirect('/', 'authDetails', 'authLoading'),
	withLogoutButton,
	withSidebar
)(LayoutFoundation)
