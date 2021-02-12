import { createReducer } from '@reduxjs/toolkit'
import merge from 'deepmerge'
import models from '../models'
import {
	GET_ACTIVE_USERS_PENDING,
	GET_ACTIVE_USERS_FULFILLED,
	GET_ACTIVE_USERS_REJECTED,
	GET_MORE_ACTIVE_USERS_PENDING,
	GET_MORE_ACTIVE_USERS_FULFILLED,
	GET_MORE_ACTIVE_USERS_REJECTED
} from '../types'

const initialState = {
	data: [],
	lastDocument: null,
	get: {
		loading: false,
		error: null
	},
	more: {
		loading: false,
		error: null
	}
}

export const activeUsers = createReducer(initialState, {
	[GET_ACTIVE_USERS_PENDING]: state => {
		state.get.loading = true
		state.get.error = null
	},
	[GET_ACTIVE_USERS_FULFILLED]: (state, { payload }) => {
		state.lastDocument = payload.docs[payload.docs.length - 1]
		state.data = payload.docs.map(activeUser => {
			return merge(models.user, activeUser.data())
		})
		state.get.loading = false
		state.get.error = null
	},
	[GET_ACTIVE_USERS_REJECTED]: state => {
		state.get.loading = false
		state.get.error = 'Failed to get active users.'
	},
	[GET_MORE_ACTIVE_USERS_PENDING]: state => {
		state.more.loading = true
		state.more.error = null
	},
	[GET_MORE_ACTIVE_USERS_FULFILLED]: (state, { payload }) => {
		if (payload.docs.length > 0) {
			state.lastDocument = payload.docs[payload.docs.length - 1]
			state.data = state.data.concat(
				payload.docs.map(activeUser => merge(models.user, activeUser.data()))
			)
		} else {
			state.lastDocument = null
		}
		state.more.loading = false
		state.more.error = null
	},
	[GET_MORE_ACTIVE_USERS_REJECTED]: state => {
		state.more.loading = false
		state.more.error = 'Failed to get active users.'
	}
})
