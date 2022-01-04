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

  // 父组件每一次state更新，子组件render都会自动执行
  render () {
    console.log('child render')
    const { item, index } = this.props

    return (
      <li
        onClick={ this.handleClick }
      >{item}</li>
    )
  }

  // 这个时候item组件就可以使用`shouldComponentUpdate`返回`false`，这样父组件更新render，子组件不用做无谓的更新渲染
  shouldComponentUpdate (nextProps, nextState) {
    if (nextProps.item !== this.props.item) {
      return true
    }
    return false
  }

  // 一个组件要从父组件接受参数
  // 只要父组件的render函数被执行了，并且这组件之前已经存在于父组件中，组件componentWillReceiveProps就会被执行
  // 如果这个组件第一次存在父组件中，不会执行
  componentWillReceiveProps (nextProps) {
  }

  // 组件被卸载时自动执行
  componentWillUnmount () {
  }

}

TodoItem.propTypes = {
  item: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onItemDelete: PropTypes.func,
  index: PropTypes.number
}

TodoItem.defaultProps = {
}

export default TodoItem
