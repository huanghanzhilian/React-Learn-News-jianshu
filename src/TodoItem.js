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
