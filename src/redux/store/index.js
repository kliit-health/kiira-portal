import { applyMiddleware, createStore, compose } from 'redux'
import thunk from 'redux-thunk'
import { useMemo } from 'react'
// import { composeWithDevTools } from 'redux-devtools-extension'
import promise from 'redux-promise-middleware'
import combinedReducer, { resetEnhancer } from '../reducers'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

let store

const persistConfig = {
	key: 'kiira-portal',
	whitelist: [],
	storage // place to select which state you want to persist
}

const persistedReducer = persistReducer(
	persistConfig,
	resetEnhancer(combinedReducer)
)

function initStore(preloadedState = {}) {
	return createStore(
		persistedReducer,
		preloadedState,
		compose(applyMiddleware(thunk, promise))
	)
}

export const initializeStore = preloadedState => {
	let _store = store ?? initStore(preloadedState)

	// After navigating to a page with an initial Redux state, merge that state
	// with the current state in the store, and create a new store
	if (preloadedState && store) {
		_store = initStore({
			...store.getState(),
			...preloadedState
		})
		// Reset the current store
		store = undefined
	}

	// For SSG and SSR always create a new store
	if (typeof window === 'undefined') return _store
	// Create the store once in the client
	if (!store) store = _store

	return _store
}

export function useStore(initialState) {
	const store = useMemo(() => initializeStore(initialState), [initialState])
	return store
}
