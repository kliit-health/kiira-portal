import { isMobile } from 'react-device-detect'
import { Typography } from 'src/components'
import { intl } from 'src/i18n'
import './styles.scss'

export const Success = () => {
	const styles = {
		root: 'password-reset-success',
		container: 'password-reset-success__container',
		logo: 'password-reset-success__logo',
		text: { root: 'password-reset-success__text' }
	}

	return (
		<div className={styles.root}>
			<div className={styles.container}>
				<img className={styles.logo} src="/assets/kiira_logo.svg" />
				<Typography success classes={styles.text} green>
					{intl.passwordChanged.description}
				</Typography>
			</div>
		</div>
	)
}
