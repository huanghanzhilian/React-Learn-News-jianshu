import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import axios from 'axios'

import { GET_INIT_LIST } from './actionTypes'
import {
  initListAction
} from './actionCreators'

function* getInitList () {
  try {
    const res = yield axios.get('http://rap2api.taobao.org/app/mock/296937/api/todolist')
    const action = initListAction(res.data.data)
    yield put(action)
  } catch (err) {
    console.log('network request fail.', err.message)
  }
}

// generator 函数
function* mySaga () {
  yield takeEvery(GET_INIT_LIST, getInitList)
}

export default mySaga