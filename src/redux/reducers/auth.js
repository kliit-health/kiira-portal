import { switchCase } from 'helpers/functions'
import {
	LOG_IN_PENDING,
	LOG_IN_FULFILLED,
	LOG_IN_REJECTED,
	LOG_OUT_PENDING,
	LOG_OUT_FULFILLED,
	LOG_OUT_REJECTED
} from '../types'

const INITIAL_STATE = {
	authDetails: null,
	authError: null,
	authLoading: true
}

export const auth = (state = INITIAL_STATE, action) => {
	const { payload, type } = action
	return switchCase({
		[LOG_IN_FULFILLED]: {
			...state,
			authError: null,
			authLoading: false,
			authDetails: payload
		},
		[LOG_IN_REJECTED]: { ...state, authError: payload, authLoading: false },
		[LOG_IN_PENDING]: { ...state, authLoading: true },

		[LOG_OUT_PENDING]: { ...state, authLoading: true },
		[LOG_OUT_FULFILLED]: { ...INITIAL_STATE, authLoading: false },
		[LOG_OUT_REJECTED]: { ...INITIAL_STATE, authLoading: false }
	})(state)(type)
}
