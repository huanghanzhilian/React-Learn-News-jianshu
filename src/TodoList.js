import React, { Component, Fragment } from 'react'

import TodoItem from './TodoItem'

import style from './style.css'

class TodoList extends Component {
  // 当组件创建的时候会执行constructor
  constructor (props) {
    super(props)
    this.state = {
      inputValue: '',
      list: []
    }

    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)
  }

  // 在组件即将被挂载到页面的时刻自动执行
  componentWillMount () {
    console.log('compomentWillMount')
  }

  // 当组件的state或者props发生改变的时候，render函数就会重新执行
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
            ref={ (input) => { this.input = input } }
          />
          <button
            onClick={ this.handleBtnClick }
          >submit</button>
        </div>
        <ul ref={ (ul) => { this.ul = ul } }>
          { this.renderItem(list) }
        </ul>
      </Fragment>
    )
  }

  // 组件被挂载到页面之后自动执行
  componentDidMount () {
    console.log('compomentDidMount')
  }

  // 组件被隔壁发现之前，会自动执行
  // 要求返还boolean 来决定组件是否要更新
  shouldComponentUpdate (nextProps, nextState) {
    console.log('shouldComponentUpdate')
    console.log(nextProps)
    console.log(nextState)
    return true
  }

  // 组件被更新之前，会自动执行，但是它是在shouldComponentUpdate之后执行
  // 如果shouldComponentUpdate返回true它才执行
  // 如果返回false，函数不会执行
  componentWillUpdate (nextProps, nextState) {
    console.log('componentWillUpdate')
    console.log(nextProps)
    console.log(nextState)
  }

  // 组件更新完成之后，它会被自动执行
  componentDidUpdate (prevProps, prevState) {
    console.log('componentDidUpdate')
    console.log(prevProps)
    console.log(prevState)
  }

  handleInput (el) {
    const value = el.target.value
    this.setState(() => ({
      inputValue: value
    }))
  }

  handleBtnClick () {
    const { inputValue, list } = this.state
    if (!inputValue) return
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }), () => {
      // console.log(this.ul.querySelectorAll('li').length)
    })
  }

  handleItemDelete (item, index) {
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
}


export default TodoList
