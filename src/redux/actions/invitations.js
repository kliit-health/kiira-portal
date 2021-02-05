import { firebaseFetch } from 'src/firebase'
import { collections, conditions } from 'src/helpers/constants'
import { GET_INVITATIONS } from '../types'

export const getInvitations = ({ organizationId }) => ({
	type: GET_INVITATIONS,
	payload: firebaseFetch(collections.invitations, [
		{ key: 'organizationId', operator: '==', value: organizationId },
		{ key: 'role', operator: '==', value: 'User' }
	])
})
