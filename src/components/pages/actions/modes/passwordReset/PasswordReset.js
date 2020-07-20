import { useContext, useState } from 'react'
import { Page } from 'src/components'
import { ActionsContext } from '../../Actions'
import { useRouter } from 'next/router'
import { confirmPasswordReset, getFirebaseErrorMessage } from 'src/firebase'
import { Auth, SetPassword, ResetPassword } from './sections'
import { FIREBASE_ERRORS } from 'src/errors'
import { ERRORS } from 'src/firebase/constants'
import { PASSWORD } from 'src/helpers/constants'
import './styles.scss'

const { PASSWORDS_MISMATCH } = ERRORS

export const PasswordReset = () => {
	const { code, firstReset } = useContext(ActionsContext)
	const [errorCode, setErrorCode] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')
	const router = useRouter()

	const handleOnPasswordChange = ({ target: { dataset, value } }) => {
		if (dataset.section === PASSWORD) {
			setPassword(value)
		} else {
			setConfirmPassword(value)
		}
	}

	const handleOnSubmit = () => {
		if (password !== confirmPassword) {
			setErrorCode(PASSWORDS_MISMATCH)
			return
		} else {
			confirmPasswordReset(code, password)
				.then(() => router.replace('/success'))
				.catch(({ code }) => setErrorCode(code))
		}
	}

	const styles = {
		page: { content: 'password-reset__page' },
		card: 'password-reset__card'
	}

	return (
		<Page classes={styles.page}>
			<div className={styles.card}>
				{firstReset ? <SetPassword /> : <ResetPassword />}
				<Auth
					onPasswordChange={handleOnPasswordChange}
					onSubmit={handleOnSubmit}
					errorMessage={FIREBASE_ERRORS[errorCode]}
				/>
			</div>
		</Page>
	)
}
