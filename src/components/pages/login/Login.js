import { useState, useEffect } from 'react'
import { compose } from 'recompose'
import { withLoadingIndicator, withRedirect } from 'src/HOCs'
import { Authentication, Presentation, ForgotPassword } from './sections'
import { Page } from 'src/components'
import { signIn, sendPasswordResetEmail } from 'src/firebase'
import { FIREBASE_ERROR } from 'src/error'
import { intl } from 'src/i18n'
import './styles.scss'
import { ERROR } from 'src/firebase/constants'

const tenSeconds = 10000
const { INTERNAL_ERROR } = ERROR

const Login = ({ authError }) => {
	const [errorCode, setErrorCode] = useState(null)
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [message, setMessage] = useState('')
	const [showForgotPassword, setShowForgotPassword] = useState(false)

	useEffect(() => {
		if (authError) {
			const { code } = authError
			setErrorCode(code)
		}
	}, [authError, setErrorCode])

	const handleEmailChange = event => {
		setEmail(event.target.value)
	}

	const handlePasswordChange = event => {
		setPassword(event.target.value)
	}

	const handleForgotPassword = () => {
		setShowForgotPassword(true)
		setErrorCode('')
		setMessage('')
	}

	const handleLogIn = () => {
		setInitialState()
	}

	const handleSubmit = () => {
		showForgotPassword
			? sendPasswordResetEmail(email)
					.then(() => {
						setMessage(intl.resetLinkSent.description)
						setTimeout(function () {
							setInitialState()
						}, tenSeconds)
					})
					.catch(({ details }) => {
						details.code
							? setErrorCode(details.code)
							: setErrorCode(INTERNAL_ERROR)
					})
			: signIn(email, password).catch(({ code }) => setErrorCode(code))
	}

	const setInitialState = () => {
		setShowForgotPassword(false)
		setErrorCode('')
		setMessage('')
	}

	const styles = {
		page: { content: 'login__page' },
		card: 'login__card'
	}

	return (
		<Page classes={styles.page}>
			<div className={styles.card}>
				<Presentation />
				{showForgotPassword ? (
					<ForgotPassword
						onLogIn={handleLogIn}
						onEmailChange={handleEmailChange}
						onSubmit={handleSubmit}
						emailValue={email}
						errorMessage={FIREBASE_ERROR[errorCode]}
						message={message}
					/>
				) : (
					<Authentication
						onEmailChange={handleEmailChange}
						onPasswordChange={handlePasswordChange}
						onSubmit={handleSubmit}
						onForgotPassword={handleForgotPassword}
						errorMessage={FIREBASE_ERROR[errorCode]}
						emailValue={email}
					/>
				)}
			</div>
		</Page>
	)
}

export default compose(
	withLoadingIndicator('authLoading', true),
	withRedirect('/dashboard/overview', 'authDetails', false)
)(Login)
