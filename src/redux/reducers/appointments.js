import { createReducer } from '@reduxjs/toolkit'
import merge from 'deepmerge'
import models from '../models'
import {
	GET_APPOINTMENTS_PENDING,
	GET_APPOINTMENTS_FULFILLED,
	GET_APPOINTMENTS_REJECTED,
	GET_MORE_APPOINTMENTS_PENDING,
	GET_MORE_APPOINTMENTS_FULFILLED,
	GET_MORE_APPOINTMENTS_REJECTED
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

export const appointments = createReducer(initialState, {
	[GET_APPOINTMENTS_PENDING]: state => {
		state.get.loading = true
		state.get.error = null
	},
	[GET_APPOINTMENTS_FULFILLED]: (state, { payload }) => {
		state.lastDocument = payload.docs[payload.docs.length - 1]
		state.data = payload.docs.map(appointment =>
			merge(models.appointment, appointment.data())
		)
		state.get.loading = false
		state.get.error = null
	},
	[GET_APPOINTMENTS_REJECTED]: state => {
		state.get.loading = false
		state.get.error = 'Failed to get appointments.'
	},
	[GET_MORE_APPOINTMENTS_PENDING]: state => {
		state.more.loading = true
		state.more.error = null
	},
	[GET_MORE_APPOINTMENTS_FULFILLED]: (state, { payload }) => {
		if (payload.docs.length > 0) {
			state.lastDocument = payload.docs[payload.docs.length - 1]
			state.data = state.data.concat(
				payload.docs.map(appointment =>
					merge(models.appointment, appointment.data())
				)
			)
		} else {
			state.lastDocument = null
		}
		state.more.loading = false
		state.more.error = null
	},
	[GET_MORE_APPOINTMENTS_REJECTED]: state => {
		state.more.loading = false
		state.more.error = 'Failed to get more appointments.'
	}
})
