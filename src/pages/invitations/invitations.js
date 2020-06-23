import {
	withRedirect,
	withLoadingIndicator,
	withSidebar,
	withLogoutButton
} from 'HOCs'
import { compose } from 'recompose'

const Invitations = () => {
	return <h1>Invitations</h1>
}

export default compose(
	withLoadingIndicator('authLoading', 'authDetails'),
	withRedirect('authDetails', '/'),
	withSidebar,
	withLogoutButton
)(Invitations)
