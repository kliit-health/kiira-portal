import { Typography } from 'src/components'
import { intl } from 'src/i18n'
import './styles.scss'

export const Error = ({ errorMessage }) => {
	const styles = {
		root: 'mode-error',
		card: 'mode-error__card',
		container: 'mode-error__container',
		logo: 'mode-error__logo',
		error: { root: 'mode-error__error' }
	}

	return (
		<div className={styles.root}>
			<div className={styles.card}>
				<div className={styles.container}>
					<img className={styles.logo} src="/assets/kiira_logo.svg" />
					<Typography classes={styles.error} error>
						{`${intl.somethingWentWrong.description}. ${errorMessage}`}
					</Typography>
				</div>
			</div>
		</div>
	)
}
