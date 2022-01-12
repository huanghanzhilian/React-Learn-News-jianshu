import { fromJS } from 'immutable'
import axios from 'axios'

import * as constants from './constants'

export const getDetailInfo = (result) => ({
  type: constants.DETAIL_INFO,
  result: fromJS(result)
})


export const getDetail = () => {
  return (dispatch) => {
    axios.get('/api/detail.json').then(res => {
      const result = res.data.data
      dispatch(getDetailInfo(result))
    }).catch(err => {})
  }
}
