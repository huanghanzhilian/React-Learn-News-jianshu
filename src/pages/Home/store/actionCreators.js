import axios from 'axios'

import * as constants from './constants'

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
