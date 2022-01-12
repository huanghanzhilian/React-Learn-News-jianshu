import React, { Component } from 'react'

import { connect } from 'react-redux'

import { actionCreators } from './store'

import Topic from './components/Topic'
import Recommend from './components/Recommend'
import List from './components/List'
import Writer from './components/Writer'

import {
  HomeWrapper,
  HomeLift,
  HomeRight,
  BackTop
} from './style'

class HomePage extends Component {

  handleScrollTop () {
    window.scrollTo(0, 0)
  }

  render () {

    const { showScroll } = this.props

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
        { showScroll && <BackTop onClick={ this.handleScrollTop }>回到顶部</BackTop> }
      </HomeWrapper>
    )
  }

  componentDidMount () {
    this.props.changeHomeData()
    this.bindEvents()
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeScrollTopShow)
  }

  bindEvents () {
    window.addEventListener('scroll', this.props.changeScrollTopShow)
  }
}

const mapState = (state) => ({
  showScroll: state.getIn(['home', 'showScroll'])
})

const mapDispatch = (dispatch) => ({
  changeHomeData() {
    dispatch(actionCreators.getHomeData())
  },

  changeScrollTopShow (e) {
    if (document.documentElement.scrollTop > 400) {
      console.log(1)
      dispatch(actionCreators.toggleTopShow(true))
    } else {
      console.log(0)
      dispatch(actionCreators.toggleTopShow(false))
    }
  }
})


export default connect(mapState, mapDispatch)(HomePage)
