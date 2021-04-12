import { createReducer, current } from '@reduxjs/toolkit'
import { switchCase } from 'src/helpers/functions'
import merge from 'deepmerge'
import models from '../models'
import moment from 'moment'
import { orderBy } from 'lodash'
import {
	GET_SIGN_UPS_PENDING,
	GET_SIGN_UPS_FULFILLED,
	GET_SIGN_UPS_REJECTED
} from '../types'

const unit = {
	date: 'date',
	week: 'week',
	month: 'month'
}

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
	[GET_SIGN_UPS_FULFILLED]: (
		state,
		{
			payload: {
				result,
				range: [start, end]
			}
		}
	) => {
		const data = result.map(user => merge(models.user, user))
		const startAt = moment(start)
		const endAt = moment(end)
		const length = endAt.diff(startAt, 'days') + 1

		state.data = switchCase({
			[length <= 15]: () => {
				const newData = Array.from({ length }, (_, index) => ({
					date: moment(end).add(-index, 'days').format('L')
				})).map(({ date }) => {
					let count = 0

					data.forEach(({ signUpDate: { seconds } }) => {
						if (moment.unix(seconds).format('L') === date) {
							count++
						}
					})
					return { date, count, unit: unit.date }
				})

				return orderBy(newData, ({ date }) => moment(date, 'L').unix(), ['asc'])
			},
			[length > 15 && length <= 105]: () => {
				const newData = Array.from({ length }, (_, index) => ({
					date: moment(end).add(-index, 'days').format('L')
				}))
					.map(({ date }) => {
						let count = 0

						data.forEach(({ signUpDate: { seconds } }) => {
							if (moment.unix(seconds).format('L') === date) {
								count++
							}
						})
						return {
							date,
							count,
							unit: unit.week,
							week: moment(date).isoWeek()
						}
					})
					.reduce((acc, value) => {
						const key = value.week
						const hasKey = acc.hasOwnProperty(key)

						acc[key] =
							hasKey && key === value.week
								? { ...value, count: acc[key].count + value.count }
								: value

						return acc
					}, {})

				return orderBy(
					Object.values(newData),
					({ date }) => moment(date, 'L').unix(),
					['asc']
				)
			},
			[length > 105]: () => {
				const newData = Array.from({ length }, (_, index) => ({
					date: moment(end).add(-index, 'days').format('L')
				}))
					.map(({ date }) => {
						let count = 0

						data.forEach(({ signUpDate: { seconds } }) => {
							if (moment.unix(seconds).format('L') === date) {
								count++
							}
						})
						return {
							date,
							count,
							unit: unit.month,
							month: moment(date).format('MMM')
						}
					})
					.reduce((acc, value) => {
						const key = moment(value.date, 'L').format('MMM')
						const hasKey = acc.hasOwnProperty(key)

						acc[key] =
							hasKey && key === value.month
								? { ...value, count: acc[key].count + value.count }
								: value

						return acc
					}, {})

				return orderBy(
					Object.values(newData),
					({ date }) => moment(date, 'L').unix(),
					['asc']
				)
			}
		})(null)(true)

		state.loading = false
		state.error = null
	},
	[GET_SIGN_UPS_REJECTED]: state => {
		state.loading = false
		state.error = 'Failed to get users.'
	}
})
