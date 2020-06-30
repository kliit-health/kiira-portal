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

export const getUserDetails = (uid, collectionName = 'users') =>
	new Promise((resolve, reject) => {
		const collection = firestore.collection(collectionName)
		const query = collection.doc(uid)
		query
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

export const firebaseSimpleFetch = (
	collectionName = 'users',
	condition,
	limit = 1000
) =>
	new Promise(async (resolve, reject) => {
		try {
			const collection = firestore.collection(collectionName)
			const query = collection.where(...condition).limit(limit)
			const response = await query.get()
			if (response) {
				const data = response.docs.map(item => item.data())
				resolve(data)
			}
		} catch (error) {
			reject(error)
		}
	})
