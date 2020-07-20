import { useState, useEffect } from 'react'
import { compose } from 'recompose'
import { withLoadingIndicator, withRedirect } from 'src/HOCs'
import { TextField, FormHelperText } from '@material-ui/core'
import { Button } from 'src/components'
import { Alert } from '@material-ui/lab'
import { signIn, forgotPassword } from 'src/firebase'
import { FIREBASE_ERRORS } from 'src/errors'
import { intl } from 'src/i18n'
import './styles.scss'

const Login = ({ authError }) => {
	const [error, setError] = useState(null)
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [emailEmpty, setEmailEmpty] = useState(false)
	const [emailSent, setEmailSent] = useState(false)

	const styles = {
		fields: 'login-page__auth-fields',
		helper: 'login-page__helper-text',
		page: 'login-page',
		card: 'login-page__card',
		onboarding: 'login-page__onboarding',
		auth: 'login-page__auth',
		button: { root: 'login-page__link-button' }
	}

	useEffect(() => {
		setError(authError)
	}, [authError, setError])

	const handleSubmit = (email, password) => {
		signIn(email, password).catch(error => setError(error))
	}

	const handleForgotPassword = () => {
		setEmailEmpty(false)
		if (!email) {
			setEmailEmpty(true)
		} else {
			forgotPassword(email)
			setEmailSent(true)
		}
	}

	const handleOnEmailChange = event => {
		setEmail(event.target.value)
	}

	const handleOnPasswordChange = event => {
		setPassword(event.target.value)
	}

	const renderTextFields = () => (
		<div className={styles.fields}>
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
		<Button
			variant="contained"
			color="primary"
			onClick={() => handleSubmit(email, password)}
		>
			{intl.login.description}
		</Button>
	)

	const renderForgotPasswordButton = () => (
		<Button
			classes={styles.button}
			variant="outlined"
			color="primary"
			onClick={handleForgotPassword}
			link
		>
			{intl.forgotPassword.description}
		</Button>
	)

	const renderHelpertext = () => (
		<div className={styles.helper}>
			<FormHelperText error>
				{FIREBASE_ERRORS[error && error.code]}
			</FormHelperText>
		</div>
	)

	const renderEmailEmptyAlert = () => (
		<Alert severity="info" onClose={() => setEmailEmpty(false)}>
			Please enter your email
		</Alert>
	)

	const renderResetSuccess = () => (
		<Alert onClose={() => setEmailSent(false)}>Check your email</Alert>
	)

	return (
		<div className={styles.page}>
			<div className={styles.card}>
				<div className={styles.onboarding}></div>
				<div className={styles.auth}>
					{renderTextFields()}
					{renderHelpertext()}
					{renderLoginButton()}
					{renderForgotPasswordButton()}
					{emailEmpty && renderEmailEmptyAlert()}
					{emailSent && renderResetSuccess()}
				</div>
			</div>
		</div>
	)
}

export default compose(
	withLoadingIndicator('authLoading', true),
	withRedirect('/dashboard/overview', 'authDetails', false)
)(Login)
