import React, { Component } from 'react'

// connect 是 react-redux 第二个核心api
import { connect } from 'react-redux'

class TodoList extends Component {

  render () {
    const { list, inputValue, changeInputValue, handleClick, handleDeleteItem } = this.props
    return (
      <div>
        <div>
          <input
            value={ this.props.inputValue }
            onChange={ changeInputValue }
          />
          <button onClick={ handleClick }>提交</button>
        </div>
        <ul>
          {
            list.map((item, index) => {
              return (
                <li
                  key={ index }
                  onClick={ handleDeleteItem }
                >{ item }</li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

// 将store里的inputValue 映射到组件的props.inputValue去
const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

// store.dispatch props 映射到组件的props
const mapDispatchToProps = (dispatch) => {
  return {
    changeInputValue (e) {
      const action = {
        type: 'chang_input_value',
        value: e.target.value
      }
      dispatch(action)
    },
    handleClick () {
      const action = {
        type: 'add_todo_item'
      }
      dispatch(action)
    },
    handleDeleteItem (index) {
      const action = {
        type: 'delete_todo_item',
        index
      }
      dispatch(action)
    },
  }
}

// 导出组件 让在react-redux组件Provider下的TodoList组件和store进行连接
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
