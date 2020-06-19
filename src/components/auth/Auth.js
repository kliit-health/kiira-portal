import { cloneElement, useEffect, useState } from 'react'
import { useUser } from '../../firebase'

/**
 * @desc injects firebase auth and user details to the children component props. These details can be then used by the HOCs.
 */

export const Auth = ({ children }) => {
	const [user, setUser] = useState({
		user: null,
		loading: true,
		error: null
	})

	const { details, loading, error } = useUser()

	useEffect(() => {
		setUser({ user: details, loading, error })
	}, [details, loading, error])

	return cloneElement(children, { ...user })
}
