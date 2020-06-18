import { UserProvider } from '../firebase'
import { wrapper } from 'redux/store'
import { Auth } from '../components'
import '../styles/globals.scss'

const App = ({ Component, pageProps }) => (
	<UserProvider>
		<Auth>
			<Component {...pageProps} />
		</Auth>
	</UserProvider>
)

export default wrapper.withRedux(App)
