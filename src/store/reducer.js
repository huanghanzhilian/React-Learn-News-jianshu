// import { combineReducers } from 'redux'
// 使用immutable
import { combineReducers } from 'redux-immutable'

// 将reducer起个别迷名hearderReducer
import { reducer as hearderReducer } from '../common/Header/store'

const reducer = combineReducers({
  header: hearderReducer
})

export default reducer
