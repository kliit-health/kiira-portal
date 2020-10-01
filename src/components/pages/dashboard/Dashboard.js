import { compose, withProps } from 'recompose'
import { withLoadingIndicator, withRedirect } from 'src/HOCs'

const Dashboard = () => {
	return <div />
}

export default compose(
	withProps(({ auth: { loading, details, error } }) => ({
		loading,
		details,
		error
	})),
	withLoadingIndicator('loading', true),
	withRedirect('/dashboard/overview', 'details', false)
)(Dashboard)
