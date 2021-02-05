import { useState, useEffect, cloneElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getUser, setUser } from 'src/redux/actions'
import { GET_USER_REJECTED } from 'src/redux/types'
import { claims } from '../firebase/constants'
import { signOut, auth } from '../firebase'
import models from 'src/redux/models'

export const FirebaseAuth = ({ children, ...rest }) => {
	const dispatch = useDispatch()

	const user = useSelector(state => state.user.data)
	const loading = useSelector(state => state.user.loading)
	const error = useSelector(state => state.user.error)

	const [details, setDetails] = useState(null)

	useEffect(() => {
		const unsubscriber = auth.onAuthStateChanged(async state => {
			try {
				if (state) {
					dispatch(getUser({ uid: state.uid }))
				} else {
					dispatch(setUser(models.user))
				}
			} catch (error) {
				dispatch({
					type: GET_USER_REJECTED,
					payload: error
				})
			}
		})
		return () => unsubscriber()
	}, [])

	useEffect(() => {
		const admin = user.role === claims.admin
		setDetails(admin ? user : null)
	}, [user])

	useEffect(() => {
		const logout = async () => {
			try {
				await signOut()
			} catch (error) {
				console.error(error)
			}
		}
		logout()
		setDetails(null)
	}, [error])

	return cloneElement(children, { auth: { error, loading, details }, ...rest })
}
