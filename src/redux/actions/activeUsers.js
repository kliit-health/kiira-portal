import { firebaseFetch } from '../../firebase'
import { collections } from '../../helpers/constants'
import { GET_ACTIVE_USERS } from '../types'

export const getActiveUsers = ({ organizationId }) => ({
	type: GET_ACTIVE_USERS,
	payload: firebaseFetch(collections.users, [
		{ key: 'organizationId', operator: '==', value: organizationId },
		{ key: 'firstLogin', operator: '==', value: false },
		{ key: 'role', operator: '==', value: 'User' }
	])
})
