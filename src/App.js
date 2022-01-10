import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import store from './store'

import Header from './common/Header'

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <div>
          <Header />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={ <div>home</div> }></Route>
              <Route path="/detail" element={ <div>detail</div> }></Route>
            </Routes>
          </BrowserRouter>
        </div>
      </Provider>
    )
  }
}


export default App
