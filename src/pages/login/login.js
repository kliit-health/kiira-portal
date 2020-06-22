import { useState } from 'react'
import { compose } from 'recompose'
import { withRedirect, withLoadingIndicator } from 'HOCs'
import { Button, TextField, FormHelperText } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'
import { logIn } from 'redux/actions'
import { intl } from 'i18n'
import { getLoginErrorMessage } from './helpers'
import './styles.scss'

const Login = ({ authError }) => {
	const dispatch = useDispatch()
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleSubmit = (email, password) => dispatch(logIn(email, password))
	const handleOnEmailChange = event => setEmail(event.target.value)
	const handleOnPasswordChange = event => setPassword(event.target.value)

	const loginError = useSelector(state => state.auth.loginError)

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
			<FormHelperText error>{getLoginErrorMessage(authError)}</FormHelperText>
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
	withRedirect('authDetails', '/dashboard', false)
)(Login)
