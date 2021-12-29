import React, { Component, Fragment } from 'react'

class TodoList extends Component {
  constructor (props) {
    super(props)

    this.state = {
      inputValue: 'hello',
      list: []
    }
  }

  handleInput (el) {
    this.setState({
      inputValue: el.target.value
    })
  }

  render () {
    return (
      <Fragment>
        <div>
          <input
            value={ this.state.inputValue }
            onInput={ this.handleInput.bind(this) }
          />
          <button>submit</button>
        </div>
        <ul>
          <li>learning english.</li>
          <li>learning react.</li>
        </ul>
      </Fragment>
    )
  }
}


export default TodoList
