import { firebaseFetch } from 'src/firebase'
import { collections } from 'src/helpers/constants'
import { GET_EXPERTS } from '../types'

export const getExperts = () => ({
	type: GET_EXPERTS,
	payload: firebaseFetch(collections.users, [
		{ key: 'role', operator: '==', value: 'Expert' }
	])
})