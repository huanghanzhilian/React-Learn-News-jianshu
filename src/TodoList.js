import React, { Component } from 'react'

// connect 是 react-redux 第二个核心api
import { connect } from 'react-redux'

class TodoList extends Component {

  handleInputChange (e) {

  }

  render () {
    return (
      <div>
        <div>
          <input
            value={ this.props.inputValue }
            onChange={ this.props.changeInputValue }
          />
          <button>提交</button>
        </div>
        <ul>
          <li>hello</li>
        </ul>
      </div>
    )
  }
}

// 将store里的inputValue 映射到组件的props.inputValue去
const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue
  }
}

// store.dispatch props 映射到组件的props
const mapDispatchToProps = (dispatch) => {
  return {
    changeInputValue(e) {
      const action = {
        type: 'chang_input_value',
        value: e.target.value
      }
      dispatch(action)
    }
  }
}

// 导出组件 让在react-redux组件Provider下的TodoList组件和store进行连接
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
