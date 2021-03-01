import { cloneElement, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from 'src/redux/actions'
import { GET_USER_PENDING, GET_USER_REJECTED, LOG_OUT } from 'src/redux/types'

export const AccessControl = ({ user, loading, error, children }) => {
	const dispatch = useDispatch()

	const details = useSelector(state => state.user.data)
	const userLoading = useSelector(state => state.user.loading)
	const userError = useSelector(state => state.user.error)

	useEffect(() => {
		if (user) {
			dispatch(getUser({ uid: user.uid }))
		} else {
			dispatch({
				type: LOG_OUT
			})
		}
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

	return cloneElement(children, {
		auth: { details, loading: userLoading, error: userError }
	})
}
