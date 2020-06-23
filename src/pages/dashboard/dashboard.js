import {
	withRedirect,
	withLoadingIndicator,
	withSidebar,
	withLogoutButton
} from 'HOCs'
import { compose } from 'recompose'

const Dashboard = () => {
	return <div />
}

export default compose(
	withLoadingIndicator('authLoading', null, true),
	withRedirect('authDetails', '/'),
	withSidebar,
	withLogoutButton
)(Dashboard)
