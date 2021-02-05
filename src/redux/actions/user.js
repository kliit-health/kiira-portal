import { firebaseSingleFetch } from '../../firebase'
import { collections } from '../../helpers/constants'
import { GET_USER, SET_USER } from '../types'

export const getUser = ({ uid }) => ({
	type: GET_USER,
	payload: firebaseSingleFetch(collections.users, uid)
})

export const setUser = data => ({
	type: SET_USER,
	payload: data
})
