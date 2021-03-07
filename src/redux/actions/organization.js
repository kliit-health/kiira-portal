import { firebaseSingleFetch } from '../../firebase'
import { collections } from '../../helpers/constants'
import { GET_ORGANIZATION } from '../types'

export const getOrganization = ({ id }) => ({
	type: GET_ORGANIZATION,
	payload: firebaseSingleFetch(collections.organizations, id)
})
