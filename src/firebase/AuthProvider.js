import { useState, useEffect, cloneElement } from 'react'
import { auth } from 'src/firebase/initializer'

export const AuthProvider = ({ children }) => {
	const [loading, setLoading] = useState(true)
	const [user, setUser] = useState(null)
	const [error, setError] = useState(null)

	const handleInitialState = details => {
		setLoading(false)
		setUser(details)
	}

	const handleLoginFullfiled = user => {
		setLoading(false)
		setUser(user)
	}

	const handleLoginRejected = async error => {
		setError(error)
		setLoading(false)
	}

	useEffect(() => {
		const userStateObserver = auth.onAuthStateChanged(details => {
			try {
				details ? handleLoginFullfiled(details) : handleInitialState(details)
			} catch (error) {
				handleLoginRejected(error)
			}
		})
		return () => userStateObserver()
	})

	return cloneElement(children({ user, loading, error }))
}
