import { compose } from 'recompose'
import { withLoadingIndicator, withRedirect } from 'HOCs'

const Dashboard = () => {
	return <div />
}

export default compose(
	withLoadingIndicator('authLoading', true),
	withRedirect('/dashboard/overview', 'authDetails', false)
)(Dashboard)
