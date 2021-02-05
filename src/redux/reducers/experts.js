import { createReducer } from '@reduxjs/toolkit'
import merge from 'deepmerge'
import models from '../models'
import {
	GET_EXPERTS_PENDING,
	GET_EXPERTS_FULFILLED,
	GET_EXPERTS_REJECTED
} from '../types'

const initialState = {
	data: [],
	loading: false,
	error: null
}

export const experts = createReducer(initialState, {
	[GET_EXPERTS_PENDING]: state => {
		state.loading = true
		state.error = null
	},
	[GET_EXPERTS_FULFILLED]: (state, { payload }) => {
		state.data = payload.map(expert => merge(models.expert, expert))
		state.loading = false
		state.error = null
	},
	[GET_EXPERTS_REJECTED]: state => {
		state.loading = false
		state.error = 'Failed to get experts.'
	}
})
