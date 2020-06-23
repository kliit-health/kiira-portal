import {
	withRedirect,
	withLoadingIndicator,
	withSidebar,
	withLogoutButton
} from 'HOCs'
import { compose } from 'recompose'

const Overview = () => {
	return <h1>Overview</h1>
}

export default compose(
	withLoadingIndicator('authLoading', 'authDetails'),
	withRedirect('authDetails', '/'),
	withSidebar,
	withLogoutButton
)(Overview)
