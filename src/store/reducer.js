import { combineReducers } from 'redux-immutable'

import { reducer as hearderReducer } from '../common/Header/store'
import { reducer as homePageReducer } from '../pages/Home/store'

const reducer = combineReducers({
  header: hearderReducer,
  home: homePageReducer
})

export default reducer
