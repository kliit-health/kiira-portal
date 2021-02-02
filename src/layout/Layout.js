import { compose, withProps } from 'recompose'
import { cloneElement } from 'react'
import {
	withRedirect,
	withLogoutButton,
	withSidebar,
	withLoadingIndicator
} from 'src/HOCs'

const LayoutFoundation = ({ children, ...rest }) => {
	return cloneElement(children, { ...rest })
}

export const Layout = compose(
	withProps(({ auth: { loading, details, error } }) => ({
		loading,
		details,
		error
	})),
	withLoadingIndicator('loading'),
	withRedirect('/', 'details'),
	withLogoutButton,
	withSidebar
)(LayoutFoundation)
