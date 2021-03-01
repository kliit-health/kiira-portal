import { createReducer } from '@reduxjs/toolkit'
import merge from 'deepmerge'
import models from '../models'
import moment from 'moment'
import { orderBy } from 'lodash'
import {
	GET_SIGN_UPS_PENDING,
	GET_SIGN_UPS_FULFILLED,
	GET_SIGN_UPS_REJECTED
} from '../types'

const initialState = {
	data: [],
	loading: false,
	error: null
}

export const signUps = createReducer(initialState, {
	[GET_SIGN_UPS_PENDING]: state => {
		state.loading = true
		state.error = null
	},
	[GET_SIGN_UPS_FULFILLED]: (state, { payload }) => {
		const data = payload.docs.map(user => merge(models.user, user.data()))

		let days = [...Array(15)].map((_, index) => ({
			date: moment().add(-index, 'days').format('L')
		}))

		const chartData = days.map(({ date }) => {
			let count = 0

			data.forEach(item => {
				const signUpDate = moment.unix(item.signUpDate.seconds).format('L')
				if (signUpDate === date) {
					count++
				}
			})

			return {
				date,
				count
			}
		})

		state.data = orderBy(chartData, ({ date }) => date, ['asc'])
		state.loading = false
		state.error = null
	},
	[GET_SIGN_UPS_REJECTED]: state => {
		state.loading = false
		state.error = 'Failed to get users.'
	}
})
