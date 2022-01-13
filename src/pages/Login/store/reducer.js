import { fromJS } from 'immutable'
import * as constants from './constants'

const defaultState = fromJS({
  login: false
})

const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case constants.LOGIN_STATUE:
      return state.set('login', action.result)
    case constants.LOGOUT:
      return state.set('login', false)
    default:
      return state
  }
}

export default reducer
