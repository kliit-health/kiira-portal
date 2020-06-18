import { withRedirect, withLoadingIndicator } from 'HOCs'
import { compose } from 'recompose'
import styles from './dashboard.module.scss'

const Dashboard = () => {
	return <h1 className={styles.title}>Welcome to Kliit Dashboard</h1>
}

export default compose(withLoadingIndicator, withRedirect)(Dashboard)
