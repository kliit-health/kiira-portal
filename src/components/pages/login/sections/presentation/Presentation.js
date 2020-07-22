import { Typography } from 'src/components'
import { intl } from 'src/i18n'
import './styles.scss'

export const Presentation = () => {
	const styles = {
		root: 'login-page-presentation',
		logo: 'login-page-presentation__logo',
		slogan: 'login-page-presentation__slogan',
		image: 'login-page-presentation__image'
	}

	return (
		<div className={styles.root}>
			<div className={styles.slogan}>
				<img className={styles.logo} src="/assets/kiira_logo_white.svg" />
				<Typography h7 white>
					{intl.virtualWomensClinic.description}
				</Typography>
			</div>
			<img className={styles.image} src="/assets/login_image.svg" />
		</div>
	)
}
