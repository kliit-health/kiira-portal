import { createReducer } from '@reduxjs/toolkit'
import merge from 'deepmerge'
import models from '../models'
import {
	GET_USER_PENDING,
	GET_USER_FULFILLED,
	GET_USER_REJECTED,
	UPDATE_USER_PENDING,
	UPDATE_USER_FULFILLED,
	UPDATE_USER_REJECTED
} from '../types'

const initialState = {
	data: null,
	loading: false,
	error: null
}

export const user = createReducer(initialState, {
	[GET_USER_PENDING]: state => {
		state.loading = true
		state.error = null
	},
	[GET_USER_FULFILLED]: (state, { payload }) => {
		state.data = merge(models.user, payload)
		state.loading = false
		state.error = null
	},
	[GET_USER_REJECTED]: state => {
		state.data = models.user
		state.loading = false
		state.error = {
			message: 'Failed to get user.'
		}
	},
	[UPDATE_USER_PENDING]: state => {
		state.loading = true
		state.error = null
	},
	[UPDATE_USER_FULFILLED]: (state, { payload }) => {
		state.data = { ...state.data, ...payload }
		state.loading = false
		state.error = null
	},
	[UPDATE_USER_REJECTED]: state => {
		state.loading = false
		state.error = {
			message: 'Failed to update user.'
		}
	}
})
