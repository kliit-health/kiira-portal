import { firestore } from 'src/firebase'
import { collections } from '../../helpers/constants'
import { GET_SIGN_UPS } from '../types'

export const getSignUps = ({ organizationId, startDate }) => {
	let ref = firestore
		.collection(collections.users)
		.where('organizationId', '==', organizationId)
		.where('firstLogin', '==', false)

	return {
		type: GET_SIGN_UPS,
		payload: ref.orderBy('signUpDate').startAt(startDate).get()
	}
}
