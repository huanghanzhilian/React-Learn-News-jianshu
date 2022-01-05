import {
  CHANGE_INPUT_VALUE,
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM,
  INIT_LIST_ACTION } from './actionTypes'

const defaultState = {
  inputValue: '',
  list: []
}

/**
 * [笔记本 reducer，存放着很多图书馆的数据的情况，和操作情况]
 * reducer可以接受state，但是不能修改state
 * @param  {[type]} state  [图书馆所有数据的信息]
 * @param  {[type]} action [description]
 * @return {[type]}        [description]
 */
export default (state = defaultState, action) => {
  if (action.type === CHANGE_INPUT_VALUE) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }

  if (action.type === ADD_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.push(newState.inputValue)
    newState.inputValue = ''
    return newState
  }

  if (action.type === DELETE_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.index, 1)
    return newState
  }

  if (action.type === INIT_LIST_ACTION) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list = [...action.data]
    return newState
  }

  return state
}
