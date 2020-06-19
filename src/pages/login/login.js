import { useState } from 'react'
import { compose } from 'recompose'
import { withRedirect, withLoadingIndicator } from 'HOCs'
import { Button, TextField, FormHelperText } from '@material-ui/core'
import { signIn } from '../../firebase/functions'
import { intl } from 'i18n'
import { getLoginErrorMessage } from './helpers'
import styles from './login.module.scss'

const Login = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [errorCode, setErrorCode] = useState('')

	const handleSubmit = (email, password) =>
		signIn(email, password).catch(error => setErrorCode(error.code))

	const handleOnEmailChange = event => setEmail(event.target.value)
	const handleOnPasswordChange = event => setPassword(event.target.value)

	const renderTextFields = () => (
		<div className={styles['auth-fields-container']}>
			<TextField
				label={intl.email.description}
				onChange={handleOnEmailChange}
				type="email"
			/>
			<TextField
				label={intl.password.description}
				onChange={handleOnPasswordChange}
				type="password"
			/>
		</div>
	)

	const renderLoginButton = () => (
		<div className={styles['button-container']}>
			<Button
				variant="contained"
				color="primary"
				onClick={() => handleSubmit(email, password)}
				classes={{ root: styles['button-root'] }}
			>
				{intl.login.description}
			</Button>
		</div>
	)

	const renderHelpertext = () => (
		<div className={styles['helper-text-container']}>
			<FormHelperText error>{getLoginErrorMessage(errorCode)}</FormHelperText>
		</div>
	)

	const renderWelcomeMessage = () => (
		<div className={styles['welcome-message']}>{intl.welcome.description}</div>
	)

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<div className={styles.onboarding}></div>
				<div className={styles.login}>
					<div className={styles.auth}>
						{renderTextFields()}
						{renderHelpertext()}
						{renderLoginButton()}
					</div>
				</div>
			</div>
		</div>
	)
}

export default compose(
	withLoadingIndicator('loading'),
	withRedirect('user', '/dashboard', false)
)(Login)
