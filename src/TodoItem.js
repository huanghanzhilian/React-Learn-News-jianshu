import React, { Component } from 'react'

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

    const { item, index } = this.props

    return (
      <li
        dangerouslySetInnerHTML={ { __html: item } }
        onClick={ this.handleClick }
      ></li>
    )
  }

}

export default TodoItem
