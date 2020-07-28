import { createContext, useEffect, useState } from 'react'
import { Container, Typography, LoadingIndicator } from 'src/components'
import { FIREBASE_ERROR } from 'src/error'
import { useRouter } from 'next/router'
import { checkActionCode } from 'src/firebase'
import { switchCase } from 'src/helpers/functions'
import {
	RESET_PASSWORD,
	RECOVER_EMAIL,
	VERIFY_EMAIL,
	ERROR,
	LOADING
} from 'src/helpers/constants'
import { PasswordReset, VerifyEmail, RecoverEmail, Error } from './modes'

export const ActionsContext = createContext()
const { Provider } = ActionsContext

export const Actions = () => {
	const router = useRouter()
	const [errorCode, setErrorCode] = useState(null)
	const [actionMode, setActionMode] = useState(LOADING)
	const { mode, oobCode: code, firstReset, displayName } = router.query

	useEffect(() => {
		if (code) {
			checkActionCode(code)
				.then(() => setActionMode(mode))
				.catch(({ code }) => {
					setErrorCode(code)
					setActionMode(ERROR)
				})
		}
	}, [code, checkActionCode])

	return (
		<Provider value={{ mode, code, firstReset, displayName }}>
			{switchCase({
				[LOADING]: <LoadingIndicator />,
				[RESET_PASSWORD]: <PasswordReset />,
				[RECOVER_EMAIL]: <RecoverEmail />,
				[VERIFY_EMAIL]: <VerifyEmail />,
				[ERROR]: <Error errorMessage={FIREBASE_ERROR[errorCode]} />
			})(undefined)(actionMode)}
		</Provider>
	)
}
