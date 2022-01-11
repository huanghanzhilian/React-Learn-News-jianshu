import React, { Component } from 'react'

import { connect } from 'react-redux'

import { actionCreators } from './store'

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

  componentDidMount () {
    this.props.changeHomeData()
  }
}

const mapState = (state) => ({})

const mapDispatch = (dispatch) => ({
  changeHomeData() {
    dispatch(actionCreators.getHomeData())
  }
})


export default connect(mapState, mapDispatch)(HomePage)
