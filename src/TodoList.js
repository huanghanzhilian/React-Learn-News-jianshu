import React, { Component, Fragment } from 'react'

import TodoItem from './TodoItem'

import style from './style.css'

class TodoList extends Component {
  constructor (props) {
    console.log('constructor')
    super(props)
    this.state = {
      inputValue: '',
      list: ['learning english.', 'learning react.']
    }

    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)
  }

  componentWillMount () {
    console.log('compomentWillMount')
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

  componentDidMount () {
    console.log('compomentDidMount')
  }

  componentWillReceiveProps (nextProps) {
    console.log('componentWillReceiveProps')
    console.log(nextProps)
    this.setState({
      list: []
    })
  }

  shouldComponentUpdate (nextProps, nextState) {
    console.log('shouldComponentUpdate')
    console.log(nextProps)
    console.log(nextState)
    return true
  }

  componentWillUpdate (nextProps, nextState) {
    console.log('componentWillUpdate')
    console.log(nextProps)
    console.log(nextState)
  }

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
