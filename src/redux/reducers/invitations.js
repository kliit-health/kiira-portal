import { createReducer } from '@reduxjs/toolkit'
import merge from 'deepmerge'
import models from '../models'
import {
	GET_INVITATIONS_PENDING,
	GET_INVITATIONS_FULFILLED,
	GET_INVITATIONS_REJECTED
} from '../types'

const initialState = {
	data: [],
	loading: false,
	error: null
}

export const invitations = createReducer(initialState, {
	[GET_INVITATIONS_PENDING]: state => {
		state.loading = true
		state.error = null
	},
	[GET_INVITATIONS_FULFILLED]: (state, { payload }) => {
		state.data = payload.map(invitation => merge(models.invitation, invitation))
		state.loading = false
		state.error = null
	},
	[GET_INVITATIONS_REJECTED]: state => {
		state.loading = false
		state.error = 'Failed to get invitations.'
	}
})
