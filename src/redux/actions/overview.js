import { firebaseSingleFetch } from 'src/firebase'
import { collections } from 'src/helpers/constants'
import { GET_OVERVIEW } from '../types'

export const getOverview = ({ organizationId }) => ({
	type: GET_OVERVIEW,
	payload: firebaseSingleFetch(collections.overview, organizationId)
})
