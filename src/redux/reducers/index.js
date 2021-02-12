import { combineReducers } from 'redux'
import { HYDRATE } from 'next-redux-wrapper'
import { routerReducer } from 'connected-next-router'
import { experts } from './experts'
import { user } from './user'
import { invitations } from './invitations'
import { activeUsers } from './activeUsers'
import { overview } from './overview'
import { questions } from './questions'
import { appointments } from './appointments'
/**
 * @desc state reconciliation during hydration,find more info on
 * https://github.com/kirill-konshin/next-redux-wrapper#motivation
 */

export default combineReducers({
	user,
	experts,
	invitations,
	activeUsers,
	overview,
	questions,
	appointments
})

// export const reducer = (state, action) => {
// 	if (action.type === HYDRATE) {
// 		const nextState = {
// 			...state,
// 			...action.payload
// 		}
// 		if (typeof window !== undefined && state?.router) {
// 			// preserve router value on client side navigation
// 			nextState.router = state.router
// 		}
// 		return nextState
// 	} else {
// 		return combinedReducer(state, action)
// 	}
// }
