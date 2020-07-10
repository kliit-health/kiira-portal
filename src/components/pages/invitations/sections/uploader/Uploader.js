import { useState, useMemo, createContext } from 'react'
import { parseCsv, switchCase } from 'helpers/functions'
import { createUsers } from '../../../../../firebase'
import { Paper, CancelButton } from 'components'
import { BadFileScreen, InitialScreen, ReportScreen } from './screens'
import { CircularProgress } from '@material-ui/core'
import './styles.scss'

export const UploaderContext = createContext()
const { Provider } = UploaderContext

export const INITIAL_SCREEN = 'INITIAL_SCREEN'
export const BAD_FILE_SCREEN = 'BAD_FILE_SCREEN'
export const SERVER_ERROR_SCREEN = 'SERVER_ERROR_SCREEN'
export const REPORT_SCREEN = 'REPORT_SCREEN'
export const LOADING_SCREEN = 'LOADING_SCREEN'

export const Uploader = ({ onCancel, organizationId }) => {
	const [response, setResponse] = useState(null)
	const [screen, setScreen] = useState(INITIAL_SCREEN)

	const styles = {
		uploader: { root: 'invitations-uploader' },
		loading: { root: 'invitations-uploader__loading-indicator' },
		container: 'invitations-uploader__container'
	}

	const keysMap = { Name: 'displayName', Email: 'email' }

	const handleResponse = (response, screen) => {
		setResponse(response)
		setScreen(screen)
	}

	const handleRetry = () => {
		setResponse(null)
		setScreen(INITIAL_SCREEN)
	}

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

	return (
		<Paper classes={styles.uploader}>
			<CancelButton onCancel={onCancel} />
			<Provider value={memoizedValue}>
				{switchCase({
					[LOADING_SCREEN]: <CircularProgress />,
					[INITIAL_SCREEN]: <InitialScreen />,
					[BAD_FILE_SCREEN]: <BadFileScreen />,
					[SERVER_ERROR_SCREEN]: {},
					[REPORT_SCREEN]: <ReportScreen />
				})(INITIAL_SCREEN)(screen)}
			</Provider>
		</Paper>
	)
}
