import './styles.scss'

export const LogoCard = () => {
	const styles = {
		card: 'logo-card',
		container: 'logo-card__container',
		image: 'logo-card__image'
	}
	return (
		<div className={styles.card}>
			<div className={styles.container}>
				<img className={styles.image} src="/assets/kiira_logo.svg" />
			</div>
		</div>
	)
}
