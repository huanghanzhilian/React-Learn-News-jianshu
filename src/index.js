import React from 'react'
import ReactDOM from 'react-dom'

import TodoList from './TodoList'

ReactDOM.render(
  <React.StrictMode>
    <TodoList test={'123'} />
  </React.StrictMode>,
  document.getElementById('root')
)
