import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import store from './store'

import Header from './common/Header'

import HomePage from './pages/Home'
import DetailPage from './pages/Detail'
import Login from './pages/Login'

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={ <HomePage /> } />
            <Route path="/detail" element={ <DetailPage /> } />
            <Route path="/login" element={ <Login /> } />
          </Routes>
        </BrowserRouter>
      </Provider>
    )
  }
}


export default App
