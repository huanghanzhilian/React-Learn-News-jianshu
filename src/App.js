import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import store from './store'

import Header from './common/Header'

import HomePage from './pages/Home'
import DetailPage from './pages/Detail'

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={ <HomePage /> }></Route>
            <Route path="/detail" element={ <DetailPage /> }></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    )
  }
}


export default App
