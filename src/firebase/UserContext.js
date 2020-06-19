import { useState, useEffect, createContext, useContext } from 'react'
import { auth, getUserDetails } from '../firebase'

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
					try {
						const userDetails = await getUserDetails(uid)
						console.log(userDetails, 'called')
						setDetails(userDetails)
						setLoading(false)
					} catch (error) {
						setDetails(null)
						setLoading(false)
					}
				} else {
					setDetails(null)
					setLoading(false)
				}
			} catch (error) {
				setError(error)
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
