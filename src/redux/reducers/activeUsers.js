import { createReducer } from '@reduxjs/toolkit'
import merge from 'deepmerge'
import models from '../models'
import {
	GET_ACTIVE_USERS_PENDING,
	GET_ACTIVE_USERS_FULFILLED,
	GET_ACTIVE_USERS_REJECTED
} from '../types'

const initialState = {
	data: [],
	loading: false,
	error: null
}

export const activeUsers = createReducer(initialState, {
	[GET_ACTIVE_USERS_PENDING]: state => {
		state.loading = true
		state.error = null
	},
	[GET_ACTIVE_USERS_FULFILLED]: (state, { payload }) => {
		state.data = payload.map(user => merge(models.user, user))
		state.loading = false
		state.error = null
	},
	[GET_ACTIVE_USERS_REJECTED]: state => {
		state.loading = false
		state.error = 'Failed to get active users.'
	}
})
