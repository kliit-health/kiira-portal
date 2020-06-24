import { signIn, signOut, getUserDetails } from '../../firebase'
import {
	INSUFICIENT_PERMISSION,
	GET_USER_DETAILS_FAILED
} from '../../firebase/constants'
import { LOG_OUT, LOG_IN_REJECTED, LOG_IN_PENDING } from '../types'

export const logIn = (email, password) => dispatch => {
	dispatch({ type: LOG_IN_PENDING })
	signIn(email, password)
		.then(({ uid }) =>
			getUserDetails(uid)
				.then(details => {
					if (!details.role || details.role.toLowerCase() !== 'admin') {
						signOut().then(() =>
							dispatch({
								type: LOG_IN_REJECTED,
								payload: INSUFICIENT_PERMISSION
							})
						)
					}
				})
				.catch(() =>
					dispatch({
						type: GET_USER_DETAILS_FAILED,
						payload: 'test'
					})
				)
		)
		.catch(error => dispatch({ type: LOG_IN_REJECTED, payload: error.code }))
}

export const logOut = () => ({
	type: LOG_OUT,
	payload: signOut()
})
