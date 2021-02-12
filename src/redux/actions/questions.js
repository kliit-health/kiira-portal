import { firestore } from 'src/firebase'
import { collections } from '../../helpers/constants'
import { GET_QUESTIONS, GET_MORE_QUESTIONS } from '../types'

export const getQuestions = ({ organizationId }) => {
	let ref = firestore
		.collection(collections.questions)
		.where('organizationId', '==', organizationId)

	return {
		type: GET_QUESTIONS,
		payload: ref.orderBy('createdAt', 'desc').limit(50).get()
	}
}

export const getMoreQuestions = ({ organizationId, lastDocument }) => {
	let ref = firestore
		.collection(collections.questions)
		.where('organizationId', '==', organizationId)

	return {
		type: GET_MORE_QUESTIONS,
		payload: ref
			.orderBy('createdAt', 'desc')
			.startAfter(lastDocument)
			.limit(50)
			.get()
	}
}
