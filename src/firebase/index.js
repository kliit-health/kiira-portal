export { auth, firestore } from './initializer'
export {
	getUserDetails,
	signIn,
	signOut,
	forgotPassword,
	firebaseSimpleFetch,
	createUsers,
	verifyPasswordResetCode,
	checkActionCode,
	confirmPasswordReset,
	getFirebaseErrorMessage
} from './functions'
export { Auth } from './Auth'
