import { auth } from './initializer'
import { SESSION } from '../constants'

export const signIn = (email, password) =>
	new Promise((resolve, reject) =>
		auth
			.setPersistence(SESSION)
			.then(() =>
				auth
					.signInWithEmailAndPassword(email, password)
					.then(response => resolve(response))
					.catch(error => reject(error))
			)
			.catch(error => reject(error))
	)
