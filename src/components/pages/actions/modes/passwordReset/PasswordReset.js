import { useContext, useState } from 'react'
import { switchCase } from 'src/helpers/functions'
import { ActionsContext } from '../../Actions'
import { confirmPasswordReset } from 'src/firebase'
import { Authentication, Success } from './sections'
import { FIREBASE_ERROR } from 'src/error'
import { ERROR } from 'src/firebase/constants'
import { PASSWORD, INITIAL, SUCCESS } from 'src/helpers/constants'
import './styles.scss'

const { PASSWORDS_MISMATCH } = ERROR

export const PasswordReset = () => {
	const { code } = useContext(ActionsContext)
	const [errorCode, setErrorCode] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')
	const [resetState, setResetState] = useState(INITIAL)

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
				.then(() => setResetState(SUCCESS))
				.catch(({ code }) => {
					setErrorCode(code)
				})
		}
	}

	const styles = {
		root: 'password-reset',
		card: 'password-reset__card'
	}

	return (
		<div className={styles.root}>
			<div className={styles.card}>
				{switchCase({
					[INITIAL]: (
						<Authentication
							onPasswordChange={handleOnPasswordChange}
							onSubmit={handleOnSubmit}
							errorMessage={FIREBASE_ERROR[errorCode]}
						/>
					),
					[SUCCESS]: <Success />
				})(undefined)(resetState)}
			</div>
		</div>
	)
}
