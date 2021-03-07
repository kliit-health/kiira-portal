import { firebaseSingleFetch, firebaseSingleUpdate } from '../../firebase'
import { collections } from '../../helpers/constants'
import { GET_USER, UPDATE_USER } from '../types'

export const getUser = ({ uid }) => ({
	type: GET_USER,
	payload: firebaseSingleFetch(collections.users, uid)
})

export const updateUser = ({ uid, updates }) => ({
	type: UPDATE_USER,
	payload: firebaseSingleUpdate(uid, collections.users, updates).then(
		_ => updates
	)
})
