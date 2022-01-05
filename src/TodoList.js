import React, { Component, Fragment } from 'react'

import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd';

import store from './store'

class TodoList extends Component {

  constructor (props) {
    super(props)

    this.state = store.getState()

    this.handleInputValue = this.handleInputValue.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
  }

  render () {
    return (
      <div
        style={{
          marginTop: '10px',
          marginLeft: '10px'
        }}
      >
        <div>
          <Input
            placeholder="Basic usage"
            style={{
              width: '300px',
              marginRight: '10px'
            }}
            value={ this.state.inputValue }
            onChange={ this.handleInputValue }
          />
          <Button
            type="primary"
            onClick={ this.handleBtnClick }
          >提交</Button>
        </div>
        <List
          style={{
            marginTop: '10px',
            width: '300px'
          }}
          bordered
          dataSource={ this.state.list }
          renderItem={(item, index) => (
            <List.Item onClick={ this.handleItemDelete.bind(this, index) }>{item}</List.Item>
          )}
        />
      </div>
    )
  }

  componentDidMount () {
    store.subscribe(this.handleStoreChange)
  }

  handleInputValue (e) {
    const action = {
      type: 'change_input_value',
      value: e.target.value
    }
    store.dispatch(action)
  }

  handleStoreChange () {
    this.setState(store.getState())
  }

  handleBtnClick () {
    const action = {
      type: 'add_todo_item'
    }
    store.dispatch(action)
  }

  handleItemDelete (index) {
    const action = {
      type: 'delete_todo_item',
      index
    }
    store.dispatch(action)
  }

}


export default TodoList
