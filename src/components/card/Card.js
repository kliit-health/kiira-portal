import styles from './Card.module.scss'

export const Card = () => {
	return (
		<div className={styles.card}>
			<div className={styles['logo-container']}>
				<img className={styles.logo} src="/assets/kiira_logo.png" />
			</div>
		</div>
	)
}
