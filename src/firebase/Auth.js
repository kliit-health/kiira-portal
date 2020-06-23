import { useEffect, cloneElement, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { auth, getUserDetails, signOut } from '../firebase'
import { INSUFICIENT_PERMISSION, ADMIN } from '../firebase/constants'
import { LOG_IN_REJECTED, LOG_IN_FULFILLED } from 'redux/types'

export const Auth = ({ children }) => {
	const dispatch = useDispatch()
	const { authDetails, authError, authLoading } = useSelector(
		state => state.auth
	)

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
			if (user) {
				const { uid } = user
				getUserDetails(uid).then(details => {
					if (!details.role || details.role.toLowerCase() !== ADMIN) {
						logInRejected()
					} else {
						logInFullfiled(details)
					}
				})
			}
		})
		return () => unsubscriber()
	}, [])
	return cloneElement(children, { authDetails, authError, authLoading })
}
