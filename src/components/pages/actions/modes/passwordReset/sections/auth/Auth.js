import { Button, TextField, Typography } from 'src/components'
import { PASSWORD } from 'src/helpers/constants'
import { intl } from 'src/i18n'
import './styles.scss'

export const Auth = ({ onPasswordChange, onSubmit, errorMessage }) => {
	const styles = {
		root: 'password-reset-auth',
		container: 'password-reset-auth__container',
		logo: 'password-reset-auth__logo',
		fieldsContainer: 'password-reset-auth__fields-container',
		button: {
			root: 'password-reset-auth__button',
			text: 'password-reset-auth__button-text'
		},
		error: { root: 'password-reset-auth__error' }
	}

	return (
		<div className={styles.root}>
			<div className={styles.container}>
				<img className={styles.logo} src="/assets/logo_white.svg" />
				<div className={styles.fieldsContainer}>
					<TextField
						data-section={PASSWORD}
						onChange={onPasswordChange}
						placeholder={intl.password.description}
						type="password"
					/>
					<TextField
						onChange={onPasswordChange}
						placeholder={intl.confirmPassword.description}
						type="password"
					/>
					<Typography classes={styles.error} error>
						{errorMessage}
					</Typography>
				</div>
				<Button classes={styles.button} onClick={onSubmit}>
					{intl.submit.description}
				</Button>
			</div>
		</div>
	)
}
