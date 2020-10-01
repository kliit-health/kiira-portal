import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createWrapper } from 'next-redux-wrapper'
import promise from 'redux-promise-middleware'
import { reducer } from '../reducers'

const middlewares = composeWithDevTools(applyMiddleware(thunk, promise))
const makeStore = () => createStore(reducer, middlewares)
export const reduxWrapper = createWrapper(makeStore)
