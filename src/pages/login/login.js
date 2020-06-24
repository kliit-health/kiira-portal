import { useState, useEffect } from 'react'
import { compose } from 'recompose'
import { withLoadingIndicator, withRedirect } from 'HOCs'
import { Button, TextField, FormHelperText } from '@material-ui/core'
import { signIn } from '../../firebase'
import { intl } from 'i18n'
import { getLoginErrorMessage } from './helpers'
import './styles.scss'

const Login = ({ authError }) => {
	const [error, setError] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

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
		<div className="login-page__auth-fields">
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
		<div className="login-page__helper-text">
			<FormHelperText error>{getLoginErrorMessage(error)}</FormHelperText>
		</div>
	)

	return (
		<div className="login-page">
			<div className="login-page__card">
				<div className="login-page__onboarding"></div>
				<div className="login-page__auth">
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
	withRedirect('/dashboard', 'authDetails', false)
)(Login)
