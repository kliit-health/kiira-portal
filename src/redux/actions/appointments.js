import { firestore } from 'src/firebase'
import { collections } from '../../helpers/constants'
import { GET_APPOINTMENTS, GET_MORE_APPOINTMENTS } from '../types'

export const getAppointments = ({ organizationId }) => {
	let ref = firestore
		.collection(collections.appointments)
		.where('organizationId', '==', organizationId)

	return {
		type: GET_APPOINTMENTS,
		payload: ref.orderBy('createdAt', 'desc').limit(50).get()
	}
}

export const getMoreAppointments = ({ organizationId, lastDocument }) => {
	let ref = firestore
		.collection(collections.appointments)
		.where('organizationId', '==', organizationId)

	return {
		type: GET_MORE_APPOINTMENTS,
		payload: ref
			.orderBy('createdAt', 'desc')
			.startAfter(lastDocument)
			.limit(50)
			.get()
	}
}
