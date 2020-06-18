import { CircularProgress } from '@material-ui/core'
import styles from './LoadingIndicator.module.scss'

export const LoadingIndicator = () => (
	<div className={styles.container}>
		<CircularProgress />
	</div>
)
