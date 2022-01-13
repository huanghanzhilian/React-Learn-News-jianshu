import React from 'react'

import {
  LoginWrapper,
  LoginBox,
  Input,
  Button
} from './style'

const Login = (props) => {

  return (
    <LoginWrapper>
      <LoginBox>
        <Input placeholder="账号" />
        <Input placeholder="密码" />
        <Button>登陆</Button>
      </LoginBox>
    </LoginWrapper>
  )
}

export default Login
