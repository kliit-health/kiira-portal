import { useState, useEffect, cloneElement } from 'react'
import { auth, getUserDetails, signOut } from '../firebase'
import { INSUFICIENT_PERMISSION, ADMIN } from '../firebase/constants'

export const UserContext = ({ children }) => {
	const [details, setDetails] = useState(null)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	const logInRejected = error => {
		signOut().then(() => {
			setError(error)
			setLoading(false)
		})
	}

	const setInitialState = () => {
		setLoading(false)
		setDetails(null)
	}

	useEffect(() => {
		const unsubscriber = auth.onAuthStateChanged(user => {
			try {
				if (user) {
					const { uid } = user
					getUserDetails(uid)
						.then(details => {
							if (!details.role || details.role.toLowerCase() !== ADMIN) {
								logInRejected(INSUFICIENT_PERMISSION)
							} else {
								setDetails(details)
								setLoading(false)
							}
						})
						.catch(error => logInRejected(error))
				} else {
					setInitialState()
				}
			} catch (error) {
				setError(error)
			}
			return () => unsubscriber()
		})
	}, [])

	return cloneElement(children, {
		authDetails: details,
		authLoading: loading,
		authError: error
	})
}
