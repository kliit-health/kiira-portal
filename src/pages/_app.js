import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { AuthProvider } from '../firebase'
import { AccessControl } from 'src/components'
import { Layout } from '../layout'
import { StylesProvider } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/core/styles'
import { theme } from '../theme'
import { Provider } from 'react-redux'
import { useStore } from '../redux/store'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import '../styles/globals.scss'

const App = ({ Component, pageProps }) => {
	const router = useRouter()
	const store = useStore(pageProps.initialReduxState)
	const persistor = persistStore(store, {}, function () {
		persistor.persist()
	})

	useEffect(() => {
		// Remove the server-side injected CSS.
		const jssStyles = document.querySelector('#jss-server-side')
		if (jssStyles) {
			jssStyles.parentElement.removeChild(jssStyles)
		}
	}, [])

	const layoutDisabled = ['/', '/actions']

	return (
		<StylesProvider injectFirst>
			<ThemeProvider theme={theme}>
				<Provider store={store}>
					<PersistGate loading={<div>loading</div>} persistor={persistor}>
						{!layoutDisabled.includes(router.pathname) ? (
							<AuthProvider>
								{props => (
									<AccessControl {...props}>
										<Layout>
											<Component {...props} />
										</Layout>
									</AccessControl>
								)}
							</AuthProvider>
						) : (
							<AuthProvider>
								{props => (
									<AccessControl {...props}>
										<Component {...props} />
									</AccessControl>
								)}
							</AuthProvider>
						)}
					</PersistGate>
				</Provider>
			</ThemeProvider>
		</StylesProvider>
	)
}

export default App
