export { auth, firestore } from './initializer'
export {
	getUserDetails,
	signIn,
	signOut,
	firebaseSimpleFetch,
	createUsers,
	verifyPasswordResetCode,
	checkActionCode,
	confirmPasswordReset,
	sendPasswordResetEmail
} from './functions'
export { FirebaseAuth } from './FirebaseAuth'
