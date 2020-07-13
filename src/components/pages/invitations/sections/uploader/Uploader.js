import { useState, useMemo, createContext } from 'react'
import { CircularProgress } from '@material-ui/core'
import { parseCsv, switchCase } from 'src/helpers/functions'
import { createUsers } from 'src/firebase'
import { Paper, CancelButton } from 'src/components'
import {
	INITIAL_SCREEN,
	BAD_FILE_SCREEN,
	SERVER_ERROR_SCREEN,
	REPORT_SCREEN,
	LOADING_SCREEN
} from 'src/helpers/constants'
import {
	BadFileScreen,
	InitialScreen,
	ReportScreen,
	ServerErrorScreen
} from './screens'
import './styles.scss'

export const UploaderContext = createContext()
const { Provider } = UploaderContext

export const Uploader = ({ onCancel, organizationId }) => {
	const [response, setResponse] = useState(null)
	const [screen, setScreen] = useState(INITIAL_SCREEN)

	const handleResponse = (response, screen) => {
		setResponse(response)
		setScreen(screen)
	}

	const handleRetry = () => {
		setResponse(null)
		setScreen(INITIAL_SCREEN)
	}

	const keysMap = { Name: 'displayName', Email: 'email' }

	const handleDrop = files => {
		setScreen(LOADING_SCREEN)
		const file = files[0]

		parseCsv(file, keysMap)
			.then(data =>
				createUsers(data, organizationId)
					.then(({ data }) => handleResponse({ ...data }, REPORT_SCREEN))
					.catch(error => handleResponse(error, SERVER_ERROR))
			)
			.catch(error => handleResponse(error, BAD_FILE_SCREEN))
	}

	const memoizedValue = useMemo(() => ({ handleRetry, handleDrop, response }), [
		handleRetry,
		handleDrop,
		response
	])

	const styles = {
		uploader: { root: 'invitations-uploader' },
		loading: { root: 'invitations-uploader__loading-indicator' },
		container: 'invitations-uploader__container'
	}

	return (
		<Paper classes={styles.uploader}>
			<CancelButton onCancel={onCancel} />
			<Provider value={memoizedValue}>
				{switchCase({
					[LOADING_SCREEN]: <CircularProgress />,
					[INITIAL_SCREEN]: <InitialScreen />,
					[BAD_FILE_SCREEN]: <BadFileScreen />,
					[SERVER_ERROR_SCREEN]: <ServerErrorScreen />,
					[REPORT_SCREEN]: <ReportScreen />
				})(INITIAL_SCREEN)(screen)}
			</Provider>
		</Paper>
	)
}
