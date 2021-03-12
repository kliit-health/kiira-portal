import { createReducer } from '@reduxjs/toolkit'
import merge from 'deepmerge'
import models from '../models'
import {
	GET_OVERVIEW_PENDING,
	GET_OVERVIEW_FULFILLED,
	GET_OVERVIEW_REJECTED
} from '../types'

const initialState = {
	data: models.overview,
	loading: false,
	error: null
}

export const overview = createReducer(initialState, {
	[GET_OVERVIEW_PENDING]: state => {
		state.data = models.overview
		state.loading = true
		state.error = null
	},
	[GET_OVERVIEW_FULFILLED]: (state, { payload }) => {
		if (payload) {
			state.data = merge(models.overview, payload)
		}
		state.loading = false
		state.error = null
	},
	[GET_OVERVIEW_REJECTED]: state => {
		state.loading = false
		state.error = 'Failed to get overview.'
	}
})
