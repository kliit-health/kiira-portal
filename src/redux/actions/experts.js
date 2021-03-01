import { ListItemText } from '@material-ui/core'
import { firebaseFetch } from 'src/firebase'
import { collections } from 'src/helpers/constants'
import { GET_EXPERTS } from '../types'

export const getExperts = ({ limit = 5000 }) => ({
	type: GET_EXPERTS,
	payload: firebaseFetch(
		collections.users,
		[{ key: 'role', operator: '==', value: 'Expert' }],
		limit
	)
})
