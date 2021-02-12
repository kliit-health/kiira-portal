import { createReducer } from '@reduxjs/toolkit'
import merge from 'deepmerge'
import models from '../models'
import {
	GET_INVITATIONS_PENDING,
	GET_INVITATIONS_FULFILLED,
	GET_INVITATIONS_REJECTED,
	GET_MORE_INVITATIONS_PENDING,
	GET_MORE_INVITATIONS_FULFILLED,
	GET_MORE_INVITATIONS_REJECTED
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

export const invitations = createReducer(initialState, {
	[GET_INVITATIONS_PENDING]: state => {
		state.get.loading = true
		state.get.error = null
	},
	[GET_INVITATIONS_FULFILLED]: (state, { payload }) => {
		state.lastDocument = payload.docs[payload.docs.length - 1]
		state.data = payload.docs.map(invitation =>
			merge(models.invitation, invitation.data())
		)
		state.get.loading = false
		state.get.error = null
	},
	[GET_INVITATIONS_REJECTED]: state => {
		state.get.loading = false
		state.get.error = 'Failed to get invitations.'
	},
	[GET_MORE_INVITATIONS_PENDING]: state => {
		state.more.loading = true
		state.more.error = null
	},
	[GET_MORE_INVITATIONS_FULFILLED]: (state, { payload }) => {
		if (payload.docs.length > 0) {
			state.lastDocument = payload.docs[payload.docs.length - 1]
			state.data = state.data.concat(
				payload.docs.map(invitation =>
					merge(models.invitation, invitation.data())
				)
			)
		} else {
			state.lastDocument = null
		}
		state.more.loading = false
		state.more.error = null
	},
	[GET_MORE_INVITATIONS_REJECTED]: state => {
		state.more.loading = false
		state.more.error = 'Failed to get more invitations.'
	}
})
