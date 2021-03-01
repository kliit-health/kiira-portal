import { firestore } from 'src/firebase'
import { collections } from '../../helpers/constants'
import { GET_ACTIVE_USERS, GET_MORE_ACTIVE_USERS } from '../types'

export const getActiveUsers = ({ organizationId }) => {
	let ref = firestore
		.collection(collections.users)
		.where('organizationId', '==', organizationId)
		.where('firstLogin', '==', false)
		.where('role', '==', 'User')

	return {
		type: GET_ACTIVE_USERS,
		payload: ref.orderBy('createdAt', 'desc').limit(50).get()
	}
}

export const getMoreActiveUsers = ({ organizationId, lastDocument }) => {
	let ref = firestore
		.collection(collections.users)
		.where('organizationId', '==', organizationId)
		.where('firstLogin', '==', false)
		.where('role', '==', 'User')

	return {
		type: GET_MORE_ACTIVE_USERS,
		payload: ref
			.orderBy('createdAt', 'desc')
			.startAfter(lastDocument)
			.limit(50)
			.get()
	}
}
