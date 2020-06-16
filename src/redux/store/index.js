import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { getFirebase } from 'react-redux-firebase'
import { firebase } from '../../firebase'
import promise from 'redux-promise-middleware'
import combinedReducers from '../reducers'

const middlewares = composeWithDevTools(
	applyMiddleware(thunk.withExtraArgument(getFirebase), promise)
)

export const store = createStore(combinedReducers, {}, middlewares)
export const rrfProps = {
	firebase,
	config: { userProfile: 'users' },
	dispatch: store.dispatch
}
