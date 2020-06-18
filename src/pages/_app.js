import { UserProvider } from '../firebase'
import { wrapper } from 'redux/store'
import { Auth, Layout } from '../components'
import '../styles/globals.scss'

const App = ({ Component, pageProps }) => (
	<UserProvider>
		<Layout>
			<Auth>
				<Component {...pageProps} />
			</Auth>
		</Layout>
	</UserProvider>
)

export default wrapper.withRedux(App)
