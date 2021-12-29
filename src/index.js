import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

// JSX 语法中
// 我们可以自定义标签，也就是自定义组件
// 如果我们要适应自己创建的组件 组件开头必须是大写
// 小写的是h5原生标签
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
