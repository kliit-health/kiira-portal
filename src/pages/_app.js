import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { Auth } from '../firebase'
import { wrapper } from 'redux/store'
import { Layout } from '../layout'
import { StylesProvider } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/core/styles'
import { theme } from '../theme'
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

	const layoutEnabled = [
		'/dashboard',
		'/dashboard/overview',
		'/dashboard/topics',
		'/dashboard/experts',
		'/invitations'
	]

	return (
		<StylesProvider injectFirst>
			<ThemeProvider theme={theme}>
				{layoutEnabled.includes(router.pathname) ? (
					<Auth>
						<Layout>
							<Component {...pageProps} />
						</Layout>
					</Auth>
				) : (
					<Auth>
						<Component {...pageProps} />
					</Auth>
				)}
			</ThemeProvider>
		</StylesProvider>
	)
}

export default wrapper.withRedux(App)
