import moment from 'moment'
import { firestore } from 'src/firebase'
import { collections } from 'src/helpers/constants'
import { GET_OVERVIEW } from '../types'

export const getOverview = ({ organizationId, range }) => {
	const [start, end] = range

	let ref = firestore
		.collection(collections.overview)
		.where('organizationId', '==', organizationId)
		.where('createdAt', '>=', moment.utc(start).startOf('day').unix())
		.where('createdAt', '<=', moment.utc(end).endOf('day').unix())

	return {
		type: GET_OVERVIEW,
		payload: ref
			.orderBy('createdAt')
			.get()
			.then(result => result.docs.map(document => document.data()))
	}
}
