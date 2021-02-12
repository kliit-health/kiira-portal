import { firestore } from 'src/firebase'
import { collections } from 'src/helpers/constants'
import { GET_INVITATIONS, GET_MORE_INVITATIONS } from '../types'

export const getInvitations = ({ organizationId }) => {
	let ref = firestore
		.collection(collections.invitations)
		.where('organizationId', '==', organizationId)

	return {
		type: GET_INVITATIONS,
		payload: ref.orderBy('invitationDate', 'desc').limit(50).get()
	}
}

export const getMoreInvitations = ({ organizationId, lastDocument }) => {
	let ref = firestore
		.collection(collections.invitations)
		.where('organizationId', '==', organizationId)

	return {
		type: GET_MORE_INVITATIONS,
		payload: ref
			.orderBy('invitationDate', 'desc')
			.startAfter(lastDocument)
			.limit(50)
			.get()
	}
}
