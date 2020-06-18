import { LOG_OUT, LOG_IN } from '../types'

export const logIn = (email, password) => ({
	type: LOG_IN
	// payload: auth.signInWithEmailAndPassword(email, password)
})

export const logOut = () => ({
	type: LOG_OUT
})
