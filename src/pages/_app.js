import { Provider } from 'react-redux'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import { Layout } from 'components'
import { store, rrfProps } from 'redux/store'
import '../styles/globals.scss'

export default ({ Component, pageProps }) => (
	<Provider store={store}>
		<ReactReduxFirebaseProvider {...rrfProps}>
			<Layout {...pageProps}>
				<Component />
			</Layout>
		</ReactReduxFirebaseProvider>
	</Provider>
)
