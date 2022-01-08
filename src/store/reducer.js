import { combineReducers } from 'redux'

// 将reducer起个别迷名hearderReducer
import { reducer as hearderReducer } from '../common/Header/store'

const reducer = combineReducers({
  header: hearderReducer
})

export default reducer
