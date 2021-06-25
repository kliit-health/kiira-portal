import { cloneElement, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUser, getOrganization, getEntities } from 'src/redux/actions'
import { GET_USER_PENDING, GET_USER_REJECTED, LOG_OUT } from 'src/redux/types'

export const AccessControl = ({ user, loading, error, children }) => {
	const dispatch = useDispatch()

	const userDetails = useSelector(state => state.user.data)
	const userLoading = useSelector(state => state.user.loading)
	const userError = useSelector(state => state.user.error)

	useEffect(() => {
		dispatch(user ? getUser({ uid: user.uid }) : { type: LOG_OUT })
	}, [user])

	useEffect(() => {
		if (loading) {
			dispatch({
				type: GET_USER_PENDING
			})
		}
	}, [loading])

	useEffect(() => {
		if (error) {
			dispatch({
				type: GET_USER_REJECTED,
				payload: error
			})
		}
	})

	useEffect(() => {
		if (error) {
			dispatch({
				type: LOG_OUT
			})
		}
	}, [error])

	useEffect(() => {
		if (userDetails && userDetails.role === 'Admin') {
			dispatch(getOrganization({ id: userDetails.organizationId }))
		} else {
			dispatch({
				type: LOG_OUT
			})
		}
	}, [userDetails])

	useEffect(() => {
		if (userDetails && userDetails.entities.length > 0) {
			dispatch(getEntities({ identifiers: userDetails.entities }))
		}
	}, [userDetails])

	return cloneElement(children, {
		auth: { details: userDetails, loading: userLoading, error: userError }
	})
}
