import { combineReducers } from 'redux'
import { auth } from './auth'
import { HYDRATE } from 'next-redux-wrapper'

/**
 * @desc state reconciliation during hydration,find more info on
 * https://github.com/kirill-konshin/next-redux-wrapper#motivation
 */

const combinedReducer = combineReducers({
	auth
})

export const reducer = (state, action) => {
	if (action.type === HYDRATE) {
		const nextState = {
			...state,
			...action.payload
		}
		if (state.auth) nextState = state
		return nextState
	} else {
		return combinedReducer(state, action)
	}
}
