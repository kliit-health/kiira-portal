import { firestore } from 'src/firebase'
import { collections } from '../../helpers/constants'
import { GET_INACTIVE_USERS, GET_MORE_INACTIVE_USERS } from '../types'

export const getInactiveUsers = ({ organizationId }) => {
	let ref = firestore
		.collection(collections.users)
		.where('organizationId', '==', organizationId)
		.where('firstLogin', '==', true)
		.where('role', '==', 'student')

	return {
		type: GET_INACTIVE_USERS,
		payload: ref.orderBy('createdAt', 'desc').limit(50).get()
	}
}

export const getMoreInactiveUsers = ({ organizationId, lastDocument }) => {
	let ref = firestore
		.collection(collections.users)
		.where('organizationId', '==', organizationId)
		.where('firstLogin', '==', true)
		.where('role', '==', 'student')

	return {
		type: GET_MORE_INACTIVE_USERS,
		payload: ref
			.orderBy('createdAt', 'desc')
			.startAfter(lastDocument)
			.limit(50)
			.get()
	}
}
