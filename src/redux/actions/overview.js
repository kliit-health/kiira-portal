import moment from 'moment'
import { firestore } from 'src/firebase'
import { collections } from 'src/helpers/constants'
import { GET_OVERVIEW } from '../types'

export const getOverview = ({ organizationId, range }) => {
	const [first, last] = range
	// const start = moment(first).format('MM/DD/YYYY')
	// const end = moment(last).format('MM/DD/YYYY')

	let ref = firestore
		.collection(collections.overview)
		.where('organizationId', '==', organizationId)
		.where('createdAt', '>=', moment.utc(first).startOf('day').unix())
		.where('createdAt', '<=', moment.utc(last).endOf('day').unix())

	return {
		type: GET_OVERVIEW,
		payload: ref
			.orderBy('createdAt')
			.get()
			.then(result => result.docs.map(document => document.data()))
	}
}
