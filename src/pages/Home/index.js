import React, { Component } from 'react'

import { connect } from 'react-redux'
import axios from 'axios'

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
    axios.get('/api/home.json').then(res => {
      const result = res.data.data
      const action = {
        type: 'change_home_data',
        topicList: result.topicList,
        articleList: result.articleList,
        recommendList: result.recommendList,
        writerList: result.writerList
      }
      this.props.changeHomeData(action)
    }).catch(err => {
      console.log(err)
    })
  }
}

const mapState = (state) => ({})

const mapDispatch = (dispatch) => ({
  changeHomeData(action) {
    dispatch(action)
  }
})


export default connect(mapState, mapDispatch)(HomePage)
