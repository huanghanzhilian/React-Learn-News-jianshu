import { fromJS } from 'immutable'
// immutable 库
// immutable 对象
import * as constants from './constants'

const defaultState = fromJS({
  focused: false
})

export default (state = defaultState, action) => {
  if (action.type === constants.SEARCH_FOCUS) {
    // immutable对象的set方法，会结合之前的immutable对象的值
    // 和设置的值，返回一个全新的的对象
    return state.set('focused', true)
  }
  if (action.type === constants.SEARCH_BLUR) {
    return state.set('focused', false)
  }
  return state
}
