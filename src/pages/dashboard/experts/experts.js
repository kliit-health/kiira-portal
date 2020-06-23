import {
	withRedirect,
	withLoadingIndicator,
	withSidebar,
	withLogoutButton
} from 'HOCs'
import { compose } from 'recompose'

const Experts = () => {
	return <h1>Experts</h1>
}

export default compose(
	withLoadingIndicator('authLoading', 'authDetails'),
	withRedirect('authDetails', '/'),
	withSidebar,
	withLogoutButton
)(Experts)
