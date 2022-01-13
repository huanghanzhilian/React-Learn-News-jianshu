import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const Write = (props) => {
  const loginStatus = useSelector(state => state.getIn(['login', 'login']))

  if (loginStatus !== true) {
    return <Navigate to="/login" />
  }

  return (
    <div>写文章也页面</div>
  )
}

export default Write
