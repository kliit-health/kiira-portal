import { firebaseSingleFetch } from '../../firebase'
import { collections } from '../../helpers/constants'
import { SET_AUTH } from '../types'

export const signIn = ({ uid }) => ({
	type: LOG_IN,
	payload: firebaseSingleFetch(collections.users, uid)
})
