import { firestore } from 'src/firebase'
import { collections } from '../../helpers/constants'
import { GET_ENTITIES } from '../types'

export const getEntities = ({ identifiers = [] }) => {
	let ref = firestore
		.collection(collections.organizations)
		.where('uid', 'in', identifiers)

	return {
		type: GET_ENTITIES,
		payload: ref.get()
	}
}
