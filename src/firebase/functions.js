import { auth, firestore, functions } from './initializer'
import { intl } from 'src/i18n'
import { ERROR, PERSISTANCE } from './constants'

const { USER_PROFILE_NOT_FOUND } = ERROR

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

export const getUserDetails = uid =>
	new Promise((resolve, reject) =>
		(async function () {
			try {
				const document = await firestore.doc(`users/${uid}`).get()
				const data = document.data()
				resolve(data)
			} catch (error) {
				reject(error)
			}
		})()
	)

export const firebaseSingleFetch = (collectionName, id) =>
	new Promise((resolve, reject) =>
		(async function () {
			try {
				const document = await firestore
					.collection(collectionName)
					.doc(id)
					.get()

				const data = document.data()
				resolve(data)
			} catch (error) {
				reject(error)
			}
		})()
	)

export const firebaseFetch = (collectionName, conditions = [], limit = 5000) =>
	new Promise((resolve, reject) =>
		(async function () {
			try {
				let query = firestore.collection(collectionName)
				for (let condition of conditions) {
					const { key, operator, value } = condition
					query = query.where(key, operator, value)
				}
				const response = await query.limit(limit).get()
				const data = response.docs.map(item => ({
					...item.data(),
					id: item.id
				}))
				resolve(data)
			} catch (error) {
				reject(error)
			}
		})()
	)

export const firebaseSimpleFetch = (
	collectionName = 'users',
	condition,
	limit = 5000
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

export const sendInvitations = async (users, organizationId) => {
	const addUsersToInvitationList = functions.httpsCallable(
		'addUsersToInvitationList'
	)
	if (organizationId && users) {
		try {
			const response = await addUsersToInvitationList({
				users,
				organizationId
			})
			return response
		} catch (error) {
			return error
		}
	}
}
