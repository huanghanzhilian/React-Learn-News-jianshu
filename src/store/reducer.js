const defaultState = {
  inputValue: 'hello world',
  list: []
}

export default (state = defaultState, action) => {
  if (action.type === 'chang_input_value') {
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }

  if (action.type === 'add_todo_item') {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.push(newState.inputValue)
    newState.inputValue = ''
    return newState
  }

  if (action.type === 'delete_todo_item') {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.index, 1)
    return newState
  }

  if (action.type === 'init_list_action') {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list = [...action.data]
    return newState
  }

  return state
}
