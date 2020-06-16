import { Provider } from 'react-redux'
import { Layout } from 'components'
import { store } from 'redux/store'
import '../styles/globals.scss'

export default ({ Component, pageProps }) => (
  <Provider store={store}>
    <Layout {...pageProps}>
      <Component />
    </Layout>
  </Provider>
)

