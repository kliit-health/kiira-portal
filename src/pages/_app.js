import { Provider } from 'react-redux'
import { store } from 'redux/store'

export default ({ Component, pageProps }) => (
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
)

