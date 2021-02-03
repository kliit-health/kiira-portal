import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createWrapper } from 'next-redux-wrapper'
import { format } from 'url'
import Router from 'next/router'
import {
	createRouterMiddleware,
	initialRouterState
} from 'connected-next-router'
import promise from 'redux-promise-middleware'
import { reducer } from '../reducers'

const makeStore = context => {
	const routerMiddleware = createRouterMiddleware()
	const { asPath, pathname, query } = context.ctx || Router.router || {}
	let initialState
	if (asPath) {
		const url = format({ pathname, query })
		initialState = {
			router: initialRouterState(url, asPath)
		}
	}

	return createStore(
		reducer,
		initialState,
		composeWithDevTools(applyMiddleware(thunk, promise, routerMiddleware))
	)
}

export const { withRedux } = createWrapper(makeStore, {
	debug: true
})
