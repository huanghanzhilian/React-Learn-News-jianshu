import { combineReducers } from 'redux-immutable'

import { reducer as hearderReducer } from '../common/Header/store'
import { reducer as homePageReducer } from '../pages/Home/store'
import { reducer as detailPageReducer } from '../pages/Detail/store'

const reducer = combineReducers({
  header: hearderReducer,
  home: homePageReducer,
  detail: detailPageReducer
})

export default reducer
