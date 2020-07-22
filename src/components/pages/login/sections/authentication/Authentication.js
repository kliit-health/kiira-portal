import { intl } from 'src/i18n'
import { Button, TextField, Typography } from 'src/components'
import './styles.scss'

export const Authentication = ({
	onPasswordChange,
	onEmailChange,
	onSubmit,
	onForgotPassword,
	errorMessage,
	emailValue
}) => {
	const styles = {
		root: 'login-authentication',
		logo: 'login-authentication__logo',
		auth: 'login-authentication__auth',
		button: { root: 'login-authentication__button' },
		link: { root: 'login-authentication__link' },
		textField: { root: 'login-authentication__text-field' },
		error: { root: 'login-authentication__error' }
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
				<TextField
					placeholder={intl.password.description}
					onChange={onPasswordChange}
					type="password"
					classes={styles.textField}
				/>
				<Typography error classes={styles.error}>
					{errorMessage}
				</Typography>
				<Button classes={styles.button} onClick={onSubmit}>
					{intl.login.description}
				</Button>
			</div>
			<Button classes={styles.link} onClick={onForgotPassword} link>
				{intl.forgotPassword.description}
			</Button>
		</div>
	)
}
