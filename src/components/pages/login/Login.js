import { useState } from 'react'
import { compose } from 'recompose'
import { withLoadingIndicator, withRedirect } from 'HOCs'
import { Button, TextField, FormHelperText } from '@material-ui/core'
import { signIn } from 'helpers/firebase'
import { intl } from 'i18n'
import { getLoginErrorMessage } from 'helpers/functions'
import './styles.scss'

const Login = ({ authError }) => {
	const [error, setError] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [errorCode, setErrorCode] = useState('')

	const styles = {
		fields: 'login-page__auth-fields',
		helper: 'login-page__helper-text',
		page: 'login-page',
		card: 'login-page__card',
		onboarding: 'login-page__onboarding',
		auth: 'login-page__auth'
	}

	useEffect(() => {
		setError(authError)
	}, [authError, setError])

	const handleSubmit = (email, password) => {
		signIn(email, password).catch(error => setError(error))
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

	const renderHelpertext = () => (
		<div className={styles.helper}>
			<FormHelperText error>{getLoginErrorMessage(error)}</FormHelperText>
		</div>
	)

	const renderTextFields = () => (
		<div className={styles['auth-fields-container']}>
			<TextField
				label={intl.email.description}
				onChange={handleOnEmailChange}
			/>
			<TextField
				label={intl.password.description}
				onChange={handleOnPasswordChange}
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
		<div className={styles.page}>
			<div className={styles.card}>
				<div className={styles.onboarding}></div>
				<div className={styles.auth}>
					{renderTextFields()}
					{renderHelpertext()}
					{renderLoginButton()}
				</div>
			</div>
		</div>
	)
}

export default compose(
	withLoadingIndicator('authLoading', true),
	withRedirect('/dashboard/overview', 'authDetails', false)
)(Login)
