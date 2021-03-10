import { LOG_OUT } from 'src/redux/types'
import { combineReducers } from 'redux'
import { experts } from './experts'
import { user } from './user'
import { invitations } from './invitations'
import { activeUsers } from './activeUsers'
import { overview } from './overview'
import { questions } from './questions'
import { appointments } from './appointments'
import { signUps } from './signUps'
import { organization } from './organization'
import { entities } from './entities'
/**
 * @desc state reconciliation during hydration,find more info on
 * https://github.com/kirill-konshin/next-redux-wrapper#motivation
 */

export const resetEnhancer = rootReducer => (state, action) => {
	if (action.type === LOG_OUT) {
		return rootReducer(undefined, {})
	}
	return rootReducer(state, action)
}

export default combineReducers({
	user,
	experts,
	invitations,
	activeUsers,
	overview,
	questions,
	appointments,
	signUps,
	organization,
	entities
})
