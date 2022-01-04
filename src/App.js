import React, { Component, Fragment } from 'react'

import { CSSTransition, TransitionGroup } from 'react-transition-group'

import './style.css'

class App extends Component {

  constructor (props) {
    super(props)

    this.state = {
      list: ['item']
    }

    this.handleAddItem = this.handleAddItem.bind(this)
  }

  handleAddItem () {
    this.setState((prevState) => {
      return {
        list: [...prevState.list, 'item']
      }
    })
  }

  render () {
    return (
      <Fragment>
        <TransitionGroup className="todo-list">
          {
            this.state.list.map((item, index) => {
              return (
                <CSSTransition
                  in={ this.state.show }
                  timeout={1000}
                  classNames="fade"
                  unmountOnExit
                  onEntered={(el) => { el.style.color = 'blue' }}
                  appear={true}
                  key={index}
                >
                  <div>{ item }</div>
                </CSSTransition>
              )
            })
          }
        </TransitionGroup>
        <button onClick={ this.handleAddItem }>add item</button>
      </Fragment>
    )
  }
}


export default App
