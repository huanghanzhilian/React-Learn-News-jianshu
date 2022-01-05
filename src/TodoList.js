import React, { Component, Fragment } from 'react'

import 'antd/dist/antd.css'

import store from './store'
import {
  getInputChangeAction,
  getAddItemAction,
  getDeleteItemAction
} from './store/actionCreators'

import TodoListUI from './TodoListUI'

class TodoList extends Component {

  constructor (props) {
    super(props)

    this.state = store.getState()

    this.handleInputValue = this.handleInputValue.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)
  }

  render () {
    return (
      <TodoListUI
        inputValue={ this.state.inputValue }
        list={ this.state.list }
        handleInputValue={ this.handleInputValue }
        handleBtnClick={ this.handleBtnClick }
        handleItemDelete={ this.handleItemDelete }
      />
    )
  }

  componentDidMount () {
    store.subscribe(this.handleStoreChange)
  }

  handleInputValue (e) {
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action)
  }

  handleStoreChange () {
    this.setState(store.getState())
  }

  handleBtnClick () {
    const action = getAddItemAction()
    store.dispatch(action)
  }

  handleItemDelete (index) {
    const action = getDeleteItemAction(index)
    store.dispatch(action)
  }

}


export default TodoList
