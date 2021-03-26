import { createReducer } from '@reduxjs/toolkit'
import models from '../models'
import merge from 'deepmerge'
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
		state.selected = models.overview
		state.loading = true
		state.error = null
	},
	[GET_OVERVIEW_FULFILLED]: (state, { payload }) => {
		state.loading = false
		state.error = null

		if (payload.length > 0) {
			state.data = payload.reduce(
				(accumulator, { organizationId, createdAt, ...rest }) => {
					const overview = merge(models.overview, { ...rest })

					Object.entries(overview).forEach(entry => {
						const [key, value] = entry
						accumulator[key] = accumulator[key] + value || value
					})

					return accumulator
				},
				{}
			)
		} else {
			state.data = models.overview
		}
	},
	[GET_OVERVIEW_REJECTED]: state => {
		state.loading = false
		state.error = 'Failed to get overview.'
	}
})
