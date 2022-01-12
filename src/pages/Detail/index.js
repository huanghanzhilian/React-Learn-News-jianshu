import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { actionCreators } from './store'

import {
  DetailWrapper,
  Header,
  Content
} from './style'

const DetailPage = (props) => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch()
  const title = useSelector(state => state.getIn(['detail', 'title']))
  const content = useSelector(state => state.getIn(['detail', 'content']))
  useEffect(() => {
    dispatch(actionCreators.getDetail(searchParams.get("id") || ''))
  }, [])
  return (
    <DetailWrapper>
       <Header>{ title }</Header>
       <Content dangerouslySetInnerHTML={{ __html: content }} />
     </DetailWrapper>
  )
}

export default DetailPage
