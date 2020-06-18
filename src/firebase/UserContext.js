import { useState, useEffect, createContext, useContext } from 'react'
import { auth } from './initializer'

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
	const [details, setDetails] = useState(null)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		const unsubscriber = auth.onAuthStateChanged(async user => {
			try {
				if (user) {
					const { uid, email } = user
					// look for the user doc in your Firestore
					// const userDoc = await firebase.firestore().doc(`users/${uid}`).get()
					setDetails({ uid, email })
				} else setDetails(null)
			} catch (error) {
				setError(error)
			} finally {
				setLoading(false)
			}
		})
		return () => unsubscriber()
	}, [])

	return (
		<UserContext.Provider value={{ details, loading, error }}>
			{children}
		</UserContext.Provider>
	)
}

export const useUser = () => useContext(UserContext)
