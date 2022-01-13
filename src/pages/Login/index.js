import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom'

import { actionCreators } from './store'

import {
  LoginWrapper,
  LoginBox,
  Input,
  Button
} from './style'

const Login = (props) => {
  const dispatch = useDispatch()
  const loginStatus = useSelector(state => state.getIn(['login', 'login']))
  const [account, setAccount] = useState();
  const [password, setPassword] = useState();
  useEffect(() => {
    
  }, [])
  function login () {
    dispatch(actionCreators.login(account.value, password.value))
  }

  if (loginStatus === true) {
    return <Navigate to="/" />
  }

  return (
    <LoginWrapper>
      <LoginBox>
        <Input placeholder="账号" type="text" ref={ (input) => { setAccount(input) }  } />
        <Input placeholder="密码" type="password" ref={ (input) => { setPassword(input) }  } />
        <Button onClick={ login }>登陆</Button>
      </LoginBox>
    </LoginWrapper>
  )
}

export default Login
