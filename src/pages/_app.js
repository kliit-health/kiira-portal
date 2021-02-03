import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { FirebaseAuth } from '../firebase'
import { Layout } from '../layout'
import { StylesProvider } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/core/styles'
import { theme } from '../theme'
import { withRedux } from '../redux/store'
import '../styles/globals.scss'

const App = ({ Component, pageProps }) => {
	const router = useRouter()

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
				{!layoutDisabled.includes(router.pathname) ? (
					<FirebaseAuth>
						<Layout>
							<Component {...pageProps} />
						</Layout>
					</FirebaseAuth>
				) : (
					<FirebaseAuth>
						<Component {...pageProps} />
					</FirebaseAuth>
				)}
			</ThemeProvider>
		</StylesProvider>
	)
}

export default withRedux(App)
