import { intl } from 'src/i18n'
import { Button, TextField, Typography } from 'src/components'
import './styles.scss'

export const ForgotPassword = ({
	onEmailChange,
	onLogIn,
	errorMessage,
	onSubmit,
	emailValue,
	message,
	loading
}) => {
	const styles = {
		root: 'login-forgot-password',
		logo: 'login-forgot-password__logo',
		auth: 'login-forgot-password__auth',
		button: { root: 'login-forgot-password__button' },
		link: { root: 'login-forgot-password__link' },
		error: { root: 'login-forgot-password__error' }
	}

	return (
		<div className={styles.root}>
			<img className={styles.logo} src="/assets/kiira_logo.svg" />
			<div className={styles.auth}>
				<TextField
					placeholder={intl.email.description}
					onChange={onEmailChange}
					type="email"
					value={emailValue}
				/>
				<Typography error success={message} classes={styles.error}>
					{message || errorMessage}
				</Typography>
				<Button loading={loading} classes={styles.button} onClick={onSubmit}>
					{intl.submit.description}
				</Button>
			</div>
			<Button classes={styles.link} onClick={onLogIn} link>
				{intl.login.description}
			</Button>
		</div>
	)
}
