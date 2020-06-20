import { useEffect } from 'react'
import { Auth } from '../firebase'
import { wrapper } from 'redux/store'
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
		<StylesProvider injectFirst>
			<ThemeProvider theme={theme}>
				<Auth>
					<Component {...pageProps} />
				</Auth>
			</ThemeProvider>
		</StylesProvider>
	)
}

export default wrapper.withRedux(App)
