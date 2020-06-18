import { switchCase } from 'helpers/functions'
import {
	LOG_IN_PENDING,
	LOG_IN_FULFILLED,
	LOG_IN_REJECTED,
	LOG_OUT
} from '../types'

const INITIAL_STATE = {
	user: null,
	loginError: null,
	loginPending: false
}

export const auth = (state = INITIAL_STATE, action) => {
	const { payload, type } = action
	return switchCase({
		[LOG_IN_PENDING]: { ...state, loginError: null, loginPending: true },
		[LOG_IN_REJECTED]: () => {
			const { code } = payload
			return {
				...state,
				loginError: code,
				loginPending: false
			}
		},
		[LOG_IN_FULFILLED]: () => {
			const { user } = payload
			return {
				...state,
				user,
				loginPending: false
			}
		},
		[LOG_OUT]: { ...INITIAL_STATE }
	})(state)(type)
}
