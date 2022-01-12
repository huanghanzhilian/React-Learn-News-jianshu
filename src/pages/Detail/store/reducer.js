import { fromJS } from 'immutable'

import * as constants from './constants'

const defaultState = fromJS({
  title: '',
  content: ''
})

const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case constants.DETAIL_INFO:
      return state.merge({
        title: action.result.get('title'),
        content: action.result.get('content')
      })
    default:
      return state
  }
}


export default reducer
