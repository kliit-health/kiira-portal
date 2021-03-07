import { auth, firestore, functions } from './initializer'
import { intl } from 'src/i18n'
import { PERSISTANCE } from './constants'

export const firebaseSingleFetch = (collectionName, id) =>
	new Promise((resolve, reject) =>
		(async () => {
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
		(async () => {
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

export const firebaseSingleUpdate = (id, collection, updates, merge = true) =>
	new Promise((resolve, reject) =>
		(async () => {
			const document = firestore.collection(collection).doc(id)
			try {
				await document.set(updates, { merge })
				resolve(updates)
			} catch (error) {
				reject(error)
			}
		})()
	)

export const signIn = (email, password) =>
	new Promise((resolve, reject) =>
		(async () => {
			try {
				await auth.setPersistence(PERSISTANCE.SESSION)
				const response = await auth.signInWithEmailAndPassword(email, password)
				resolve(response)
			} catch (error) {
				reject(error)
			}
		})()
	)

export const signOut = () =>
	new Promise((resolve, reject) =>
		(async () => {
			try {
				await auth.signOut()
				resolve()
			} catch (error) {
				reject(error)
			}
		})()
	)

export const sendPasswordResetEmail = email =>
	new Promise((resolve, reject) =>
		(async () => {
			const sendPasswordResetEmail = functions.httpsCallable(
				'sendPasswordResetEmail'
			)
			try {
				await sendPasswordResetEmail(email)
				resolve(intl.linkHasBeenSent.description)
			} catch (error) {
				reject(error)
			}
		})()
	)

export const verifyPasswordResetCode = code =>
	new Promise((resolve, reject) =>
		(async () => {
			try {
				const response = await auth.verifyPasswordResetCode(code)
				resolve(response)
			} catch (error) {
				reject(error)
			}
		})()
	)

export const checkActionCode = code =>
	new Promise((resolve, reject) =>
		(async () => {
			try {
				const response = await auth.checkActionCode(code)
				resolve(response)
			} catch (error) {
				reject(error)
			}
		})()
	)

export const confirmPasswordReset = (code, newPassword) =>
	new Promise((resolve, reject) =>
		(async () => {
			try {
				const response = await auth.confirmPasswordReset(code, newPassword)
				resolve(response)
			} catch (error) {
				reject(error)
			}
		})()
	)

export const sendInvitations = (users, organizationId) =>
	new Promise((resolve, reject) =>
		(async () => {
			const addUsersToInvitationList = functions.httpsCallable(
				'addUsersToInvitationList'
			)
			try {
				await addUsersToInvitationList({
					users,
					organizationId
				})
				resolve('Link has been sent.')
			} catch (error) {
				reject(error)
			}
		})()
	)
