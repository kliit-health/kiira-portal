import { createReducer } from '@reduxjs/toolkit'
import merge from 'deepmerge'
import models from '../models'
import {
	GET_ORGANIZATION,
	GET_ORGANIZATION_FULFILLED,
	GET_ORGANIZATION_REJECTED
} from '../types'

const initialState = {
	data: models.organization,
	loading: false,
	error: null
}

export const organization = createReducer(initialState, {
	[GET_ORGANIZATION]: state => {
		state.loading = true
		state.error = null
	},
	[GET_ORGANIZATION_FULFILLED]: (state, { payload }) => {
		state.data = merge(models.organization, payload)
		state.loading = false
		state.error = null
	},
	[GET_ORGANIZATION_REJECTED]: (state, { payload }) => {
		state.loading = false
		state.error = payload
		state.data = models.user
	}
})
