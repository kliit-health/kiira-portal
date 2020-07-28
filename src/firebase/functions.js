import { auth, firestore, functions } from './initializer'
import { intl } from 'src/i18n'
import { ERROR, PERSISTANCE } from './constants'

const { USER_PROFILE_NOT_FOUND, INVALID_EMAIL } = ERROR

export const signIn = (email, password) =>
	new Promise((resolve, reject) =>
		auth
			.setPersistence(PERSISTANCE.SESSION)
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

/**
 *
 * @desc Batch create new users using firebase custom function
 * @param { Object[] } users - The array of users to be created
 * @param { string } users[].displayName - the user's display name
 * @param { string } users[].email - the user's email address
 * @param { string } oid organization id
 *
 */

export const createUsers = (users, organizationId) =>
	new Promise(async (resolve, reject) => {
		const createUsers = functions.httpsCallable('batchCreateUsers')
		if (organizationId && users) {
			try {
				const response = await createUsers({
					users,
					organizationId
				})
				resolve(response)
			} catch (error) {
				reject(error)
			}
		}
	})

export const sendPasswordResetEmail = email =>
	new Promise(async (resolve, reject) => {
		const sendPasswordResetEmail = functions.httpsCallable(
			'sendPasswordResetEmail'
		)
		try {
			await sendPasswordResetEmail(email)
			resolve(intl.linkHasBeenSent.description)
		} catch (error) {
			reject(error)
		}
	})

export const verifyPasswordResetCode = code =>
	new Promise(async (resolve, reject) => {
		try {
			const response = await auth.verifyPasswordResetCode(code)
			resolve(response)
		} catch (error) {
			reject(error)
		}
	})

export const checkActionCode = code =>
	new Promise(async (resolve, reject) => {
		try {
			const response = await auth.checkActionCode(code)
			resolve(response)
		} catch (error) {
			reject(error)
		}
	})

export const confirmPasswordReset = (code, newPassword) =>
	new Promise(async (resolve, reject) => {
		try {
			const response = await auth.confirmPasswordReset(code, newPassword)
			resolve(response)
		} catch (error) {
			reject(error)
		}
	})

export const firebaseFetch = (collectionName, conditions, limit = 100) =>
	new Promise(async (resolve, reject) => {
		try {
			let query = firestore.collection(collectionName)
			for (let condition of conditions) {
				const { key, operator, value } = condition
				query = query.where(key, operator, value)
			}
			const response = await query.limit(limit).get()
			if (response) {
				const data = response.docs.map(item => item.data())
				resolve(data)
			}
		} catch (error) {
			reject(error)
		}
	})
