import {
	withRedirect,
	withLoadingIndicator,
	withSidebar,
	withLogoutButton
} from 'HOCs'
import { compose } from 'recompose'
import styles from './dashboard.module.scss'

const Dashboard = () => {
	return <div />
}

export default compose(
	withLoadingIndicator('loading'),
	withRedirect('user', '/'),
	withSidebar,
	withLogoutButton
)(Dashboard)
