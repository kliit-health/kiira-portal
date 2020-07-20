import { createContext, useEffect, useState } from 'react'
import { Container, Typography, LoadingIndicator } from 'src/components'
import { useRouter } from 'next/router'
import { checkActionCode } from 'src/firebase'
import { switchCase } from 'src/helpers/functions'
import { PasswordReset, VerifyEmail, RecoverEmail } from './modes'

const ACTION_MODE = {
	RESET_PASSWORD: 'resetPassword',
	RECOVER_EMAIL: 'recoverEmail',
	VERIFY_EMAIL: 'verifyEmail'
}

const { RESET_PASSWORD, RECOVER_EMAIL, VERIFY_EMAIL } = ACTION_MODE

export const ActionsContext = createContext()
const { Provider } = ActionsContext

export const Actions = () => {
	const router = useRouter()
	const [errorCode, setErrorCode] = useState(null)
	const [errorMessage, setErrorMessage] = useState(null)
	const [loading, setLoading] = useState(true)
	const { mode, oobCode: code, firstReset, displayName } = router.query

	useEffect(() => {
		if (code) {
			checkActionCode(code).catch(({ code, message }) => {
				setErrorCode(code)
				setErrorMessage(message)
				setLoading(false)
			})
		}
	}, [code, checkActionCode])

	return loading ? (
		<LoadingIndicator />
	) : errorCode ? (
		<Container>
			<Typography h6 error>
				{errorMessage}
			</Typography>
		</Container>
	) : (
		<Provider value={{ mode, code, firstReset, displayName }}>
			{switchCase({
				[RESET_PASSWORD]: <PasswordReset />,
				[RECOVER_EMAIL]: <RecoverEmail />,
				[VERIFY_EMAIL]: <VerifyEmail />
			})(undefined)(mode)}
		</Provider>
	)
}
