import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component {

  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    const { item, index, onItemDelete } = this.props
    onItemDelete(item, index)
  }

  render () {

    const { item, index, test } = this.props

    return (
      <li
        onClick={ this.handleClick }
      >{test}-{item}</li>
    )
  }

  // 一个组件要从父组件接受参数
  // 只要父组件的render函数被执行了，并且这组件之前已经存在于父组件中，组件componentWillReceiveProps就会被执行
  // 如果这个组件第一次存在父组件中，不会执行
  componentWillReceiveProps (nextProps) {
    console.log('child componentWillReceiveProps')
    console.log(nextProps)
  }

  // 组件被卸载时自动执行
  componentWillUnmount () {
    console.log('child componentWillUnmount')
  }

}

TodoItem.propTypes = {
  test: PropTypes.string.isRequired,
  item: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onItemDelete: PropTypes.func,
  index: PropTypes.number
}

TodoItem.defaultProps = {
  test: 'hello world'
}

export default TodoItem
