import React, { Component } from 'react'

import Topic from './components/Topic'
import Recommend from './components/Recommend'
import List from './components/List'
import Writer from './components/Writer'

import { HomeWrapper,
         HomeLift,
         HomeRight } from './style'

class HomePage extends Component {
  render () {
    return (
      <HomeWrapper>
        <HomeLift>
          <img
            className="banner-img"
            src="https://immutable-js.com/Immutable-Data-and-React-YouTube.png"
            alt=""
          />
          <Topic />
          <List />
        </HomeLift>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
      </HomeWrapper>
    )
  }
}

export default HomePage
