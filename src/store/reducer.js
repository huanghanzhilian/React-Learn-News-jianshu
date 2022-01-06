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
  return state
}
