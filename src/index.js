import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import store from './store'
import TodoList from './TodoList'

const App = (
  <React.StrictMode>
    <Provider store={ store }>
      <TodoList />
    </Provider>
  </React.StrictMode>
)

ReactDOM.render(
  App,
  document.getElementById('root')
)
