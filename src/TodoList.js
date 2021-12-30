import React, { Component, Fragment } from 'react'

import TodoItem from './TodoItem'
import Test from './Test'

import style from './style.css'

class TodoList extends Component {
  constructor (props) {
    super(props)
    // 当组件的state或者props发生改变的时候，render函数会重新执行
    this.state = {
      inputValue: '',
      list: ['learning english.', 'learning react.']
    }

    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)
  }

  handleInput (el) {
    /*this.setState({
      inputValue: el.target.value
    })*/
    // ========
    // 函数设置是异步设置数据
    // 需要对数据进行保存
    const value = el.target.value
    this.setState(() => ({
      inputValue: value
    }))
  }

  handleBtnClick () {

    const { inputValue, list } = this.state

    if (!inputValue) return

    // this.setState({
    //   list: [...list, inputValue],
    //   inputValue: ''
    // })

    // prevState 指的是修改数据之前的数据
    // 这里prevState等价于this.state
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }))
  }

  handleItemDelete (item, index) {
    // immutable 概念
    // state 不允许做任何改变
    // list 拷贝出来副本
    // 修改副本
    // 通过setState 修改

    /*const { list } = this.state
    list.splice(index, 1)
    this.setState({
      list
    })*/

    this.setState((prevState) => {
      const list = [...prevState.list]

      list.splice(index, 1)
      return { list }
    })
  }

  renderItem (list) {
    return list.map((item, index) => {
      return (
        <TodoItem
          key={ index }
          item={ item }
          index={ index }
          onItemDelete={ this.handleItemDelete }
        />
      )
    })
  }

  render () {
    console.log('render')
    const { list, inputValue } = this.state

    return (
      <Fragment>
        <div>
          <label htmlFor="insertArea">输入内容</label>
          <input
            id="insertArea"
            className="input"
            value={ this.state.inputValue }
            onInput={ this.handleInput }
          />
          <button
            onClick={ this.handleBtnClick }
          >submit</button>
        </div>
        <ul>
          { this.renderItem(list) }
        </ul>
        <Test
          content={ inputValue }
        />
      </Fragment>
    )
  }
}


export default TodoList
