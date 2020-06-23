import {
	withRedirect,
	withLoadingIndicator,
	withSidebar,
	withLogoutButton
} from 'HOCs'
import { compose } from 'recompose'

const Topics = () => {
	return <h1>Topics</h1>
}

export default compose(
	withLoadingIndicator('authLoading', 'authDetails'),
	withRedirect('authDetails', '/'),
	withSidebar,
	withLogoutButton
)(Topics)
