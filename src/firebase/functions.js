import { auth, firestore } from './initializer'
import { SESSION, USER_PROFILE_NOT_FOUND } from './constants'

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

export const signOut = () => auth.signOut()

export const getUserDetails = (uid, collection = 'users') =>
	new Promise((resolve, reject) => {
		const documentRef = firestore.collection(collection).doc(uid)
		documentRef
			.get()
			.then(document => {
				if (document.data()) {
					resolve(document.data())
				} else {
					reject(USER_PROFILE_NOT_FOUND)
				}
			})
			.catch(error => {
				reject(error)
			})
	})
