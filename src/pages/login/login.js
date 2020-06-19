import { useState, useEffect } from 'react'
import { compose } from 'recompose'
import { withRedirect, withLoadingIndicator } from 'HOCs'
import { Button, TextField } from '@material-ui/core'
import { auth } from '../../firebase'
import { intl } from 'i18n'
import styles from './login.module.scss'

const Login = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleSubmit = (email, password) =>
		auth.signInWithEmailAndPassword(email, password)

	const handleOnEmailChange = event => setEmail(event.target.value)
	const handleOnPasswordChange = event => setPassword(event.target.value)

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<div className={styles.onboarding}></div>
				<div className={styles.login}>
					<div className={styles.auth}>
						<TextField
							label={intl.email.description}
							onChange={handleOnEmailChange}
						/>
						<TextField
							label={intl.password.description}
							onChange={handleOnPasswordChange}
						/>
						<Button
							variant="contained"
							color="primary"
							onClick={() => handleSubmit(email, password)}
							classes={{ root: styles['button-root'] }}
						>
							{intl.login.description}
						</Button>
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
