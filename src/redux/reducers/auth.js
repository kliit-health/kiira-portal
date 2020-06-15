import { switchCase } from 'helpers/functions'
import { LOG_OUT } from '../actions'

const INITIAL_STATE = {
  userDetails: null,
}

export const auth = (state = INITIAL_STATE, action) => {
  const { payload, type } = action
  return switchCase({
    [LOG_OUT]: { ...INITIAL_STATE }
  })(state)(type)
}
