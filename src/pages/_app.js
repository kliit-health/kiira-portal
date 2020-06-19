import { useEffect } from 'react'
import { UserProvider } from '../firebase'
import { wrapper } from 'redux/store'
import { Auth } from '../components'
import { StylesProvider } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/core/styles'
import { theme } from '../theme'

import '../styles/globals.scss'

const App = ({ Component, pageProps }) => {
	useEffect(() => {
		// Remove the server-side injected CSS.
		const jssStyles = document.querySelector('#jss-server-side')
		if (jssStyles) {
			jssStyles.parentElement.removeChild(jssStyles)
		}
	}, [])

	return (
		<UserProvider>
			<StylesProvider injectFirst>
				<ThemeProvider theme={theme}>
					<Auth>
						<Component {...pageProps} />
					</Auth>
				</ThemeProvider>
			</StylesProvider>
		</UserProvider>
	)
}

export default wrapper.withRedux(App)
