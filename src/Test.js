import React, { Component } from 'react'

class Test extends Component {
  render () {
    // 当父组件的render函数被执行时，它的子组件的render都将被重新运行
    console.log('children render')
    const { content } = this.props
    return (
      <div>{ content }</div>
    )
  }
}

export default Test
