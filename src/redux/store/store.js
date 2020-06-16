import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import promise from 'redux-promise-middleware'
import combinedReducers from '../reducers'

const middlewares = composeWithDevTools(applyMiddleware(thunk, promise))
export const store = createStore(combinedReducers, {}, middlewares)
