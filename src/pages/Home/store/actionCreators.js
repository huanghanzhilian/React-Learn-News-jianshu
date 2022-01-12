import { fromJS } from 'immutable'
import axios from 'axios'

import * as constants from './constants'

const addHomeList = (list, nextPage) => ({
  type: constants.ADD_ARTICLE_LIST,
  list: fromJS(list),
  nextPage
})

export const changeHomeData = (result) => ({
  type: constants.CHANGE_HOME_DATA,
  topicList: result.topicList,
  articleList: result.articleList,
  recommendList: result.recommendList,
  writerList: result.writerList
})

export const getHomeData = (params) => {
  return (dispatch) => {
    axios.get('/api/home.json').then(res => {
      const result = res.data.data
      dispatch(changeHomeData(result))
    }).catch(err => {
      console.log(err)
    })
  }
}

export const getMoreList = (page) => {
  return (dispatch) => {
    axios.get('/api/homeList.json?page=' + page).then(res => {
      const result = res.data.data
      dispatch(addHomeList(result, page + 1))
    }).catch(err => {
      console.log(err)
    })
  }
}

export const toggleTopShow = (status) => ({
  type: constants.TOGGLE_SCROLL_TOP,
  status
})