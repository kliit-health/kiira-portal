import { useState, useEffect, cloneElement } from 'react'
import { auth, getUserDetails, signOut } from '../firebase'
import { ERRORS, CLAIMS } from '../firebase/constants'

export const Auth = ({ children, ...rest }) => {
	const [details, setDetails] = useState(null)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	const setInitialState = () => {
		setLoading(false)
	}

	const logInRejected = error => {
		signOut().then(() => {
			setError(error)
			setLoading(false)
		})
	}

	const logInFullfilled = details => {
		setDetails(details)
		setLoading(false)
	}

	useEffect(() => {
		const unsubscriber = auth.onAuthStateChanged(user => {
			try {
				if (user) {
					const { uid } = user
					getUserDetails(uid)
						.then(details => {
							if (
								!details.role ||
								details.role.toLowerCase() !== CLAIMS.ADMIN
							) {
								logInRejected(ERRORS.INSUFICIENT_PERMISSION)
							} else {
								logInFullfilled(details)
							}
						})
						.catch(error => logInRejected(error))
				} else {
					setInitialState()
					setDetails(null)
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
		authError: error,
		...rest
	})
}