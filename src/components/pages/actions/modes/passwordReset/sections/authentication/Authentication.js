import { Button, TextField, Typography } from 'src/components'
import { PASSWORD } from 'src/helpers/constants'
import { intl } from 'src/i18n'
import './styles.scss'

export const Authentication = ({
	onPasswordChange,
	onSubmit,
	errorMessage
}) => {
	const styles = {
		root: 'password-reset-authentication',
		container: 'password-reset-authentication__container',
		logo: 'password-reset-authentication__logo',
		fieldsContainer: 'password-reset-authentication__fields-container',
		button: {
			root: 'password-reset-authentication__button'
		},
		error: { root: 'password-reset-authentication__error' }
	}

	return (
		<div className={styles.root}>
			<div className={styles.container}>
				<img className={styles.logo} src="/assets/kiira_logo.svg" />
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
