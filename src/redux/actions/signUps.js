import { database } from 'firebase'
import moment from 'moment'
import { firestore } from 'src/firebase'
import { collections } from '../../helpers/constants'
import { GET_SIGN_UPS } from '../types'

export const getSignUps = ({ organizationId, range }) => {
	const [start, end] = range

	let ref = firestore
		.collection(collections.users)
		.where('organizationId', '==', organizationId)
		.where('signUpDate', '>=', moment(start).startOf('day').toDate())
		.where('signUpDate', '<=', moment(end).endOf('day').toDate())

	return {
		type: GET_SIGN_UPS,
		payload: ref
			.orderBy('signUpDate')
			.get()
			.then(result => ({
				result: result.docs.map(document => document.data()),
				range
			}))
	}
}
