import { createReducer } from '@reduxjs/toolkit'
import merge from 'deepmerge'
import models from '../models'
import {
	GET_ENTITIES,
	GET_ENTITIES_FULFILLED,
	GET_ENTITIES_REJECTED
} from '../types'

const initialState = {
	data: [],
	loading: false,
	error: null
}

export const entities = createReducer(initialState, {
	[GET_ENTITIES]: state => {
		state.loading = true
		state.error = null
	},
	[GET_ENTITIES_FULFILLED]: (state, { payload }) => {
		state.loading = false
		state.error = null
		state.data = payload.docs.map(organization =>
			merge(models.organzation, organization.data())
		)
	},
	[GET_ENTITIES_REJECTED]: (state, { payload }) => {
		state.loading = false
		state.error = payload
		state.data = models.user
	}
})
