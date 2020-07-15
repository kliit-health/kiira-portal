import { combineReducers } from 'redux'
import { HYDRATE } from 'next-redux-wrapper'
import { user } from './user'
/**
 * @desc state reconciliation during hydration,find more info on
 * https://github.com/kirill-konshin/next-redux-wrapper#motivation
 */

const combinedReducer = combineReducers({
	user
})

export const reducer = (state, action) => {
	if (action.type === HYDRATE) {
		const nextState = {
			...state,
			...action.payload
		}
		if (state.user) nextState = state
		return nextState
	} else {
		return combinedReducer(state, action)
	}
}
