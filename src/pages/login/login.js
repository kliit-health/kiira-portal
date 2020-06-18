import { useState } from 'react'
import { Container, Button, TextField } from '@material-ui/core'
import { auth } from '../../firebase'
import { intl } from 'i18n'
import styles from './login.module.scss'

export const Login = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleSubmit = (email, password) =>
		auth.signInWithEmailAndPassword(email, password)

	const handleOnEmailChange = event => setEmail(event.target.value)
	const handleOnPasswordChange = event => setPassword(event.target.value)

	return (
		<div className={styles.container}>
			<div className={styles.card}>
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
				>
					{intl.login.description}
				</Button>
			</div>
		</div>
	)
}
