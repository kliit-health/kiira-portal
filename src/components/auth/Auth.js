import { cloneElement, useEffect, useState } from 'react'
import { useUser } from '../../firebase'

/**
 *
 * @desc inject firebase user details to the pages props.These details will be
 * later be used by the HOCs.
 * @param children page component
 *
 */

export const Auth = ({ children }) => {
	const [user, setUser] = useState({
		details: null,
		loading: true,
		error: null
	})

	const { details, loading, error } = useUser()

	useEffect(() => {
		setUser({ details, loading, error })
	}, [details, loading, error])
	return cloneElement(children, { user })
}
