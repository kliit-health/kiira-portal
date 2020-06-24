import { useState, useEffect, cloneElement } from 'react'
import { useDispatch } from 'react-redux'
import { auth, getUserDetails, signOut } from '../firebase'
import { INSUFICIENT_PERMISSION, ADMIN } from '../firebase/constants'
import { LOG_IN_REJECTED, LOG_IN_FULFILLED } from 'redux/types'

export const UserContext = ({ children }) => {
	const dispatch = useDispatch()
	const [details, setDetails] = useState(null)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	const logInRejected = () => {
		signOut().then(() =>
			dispatch({
				type: LOG_IN_REJECTED,
				payload: INSUFICIENT_PERMISSION
			})
		)
	}

	const logInFullfiled = payload =>
		dispatch({
			type: LOG_IN_FULFILLED,
			payload
		})

	useEffect(() => {
		const unsubscriber = auth.onAuthStateChanged(user => {
			try {
				if (user) {
					const { uid } = user
					getUserDetails(uid).then(details => {
						if (!details || details.role.toLowerCase() !== ADMIN) {
							logInRejected()
							setLoading(false)
						} else {
							logInFullfiled(details)
							setDetails(details)
							setLoading(false)
						}
					})
				} else {
					setLoading(false)
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
		authError: error
	})
}
