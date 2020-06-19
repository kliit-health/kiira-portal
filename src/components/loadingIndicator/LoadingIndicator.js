import { CircularProgress } from '@material-ui/core'
import styles from './LoadingIndicator.module.scss'

export const LoadingIndicator = () => (
	<div className={styles.container}>
		<div className={styles['animation-container']}>
			<img className={styles.logo} src="/assets/bird.png" />
		</div>
	</div>
)