import { IconButton } from '@material-ui/core'
import styles from './FloatingButton.module.scss'

export const FloatingButton = ({ children, onClick }) => (
	<div className={styles.container}>
		<IconButton classes={{ root: styles.root }} onClick={onClick}>
			{children}
		</IconButton>
	</div>
)
