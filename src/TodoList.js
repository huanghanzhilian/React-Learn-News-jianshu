import React, { Component, Fragment } from 'react'

class TodoList extends Component {
  constructor (props) {
    super(props)

    this.state = {
      inputValue: '',
      list: ['learning english.', 'learning react.']
    }
  }

  handleInput (el) {
    this.setState({
      inputValue: el.target.value
    })
  }

  handleBtnClick () {

    const { inputValue, list } = this.state

    if (!inputValue) return

    this.setState({
      list: [...list, inputValue],
      inputValue: ''
    })
  }

  handleItemDelete (item, index) {
    // immutable 概念
    // state 不允许做任何改变
    // list 拷贝出来副本
    // 修改副本
    // 通过setState 修改
    const { list } = this.state
    list.splice(index, 1)
    this.setState({
      list
    })
  }

  render () {

    const { list } = this.state

    return (
      <Fragment>
        <div>
          <input
            value={ this.state.inputValue }
            onInput={ this.handleInput.bind(this) }
          />
          <button
            onClick={ this.handleBtnClick.bind(this) }
          >submit</button>
        </div>
        <ul>
          {
            list.map((item, index) => {
              return (
                <li
                  key={ index }
                  onClick={ this.handleItemDelete.bind(this, item, index) }
                >{ item }</li>
              )
            })
          }
        </ul>
      </Fragment>
    )
  }
}


export default TodoList
