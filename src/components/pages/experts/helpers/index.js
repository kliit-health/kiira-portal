import { intl } from 'src/i18n'

export const formatHours = (day, startTime, endTime) =>
	startTime
		? `${day}: ${startTime} - ${endTime}`
		: `${day}: ${intl.closed.description}`

export const formatAddress = (city, state, zipcode) =>
	`${city}, ${state} ${zipcode}`
