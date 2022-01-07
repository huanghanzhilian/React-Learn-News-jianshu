import React from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'

import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper
} from './style'

const Header = (props) => {
  const nodeRef = React.useRef(null)
  return (
    <HeaderWrapper>
      <Logo />
      <Nav>
        <NavItem className="left active">首页</NavItem>
        <NavItem className="left">下载App</NavItem>
        <NavItem className="right">登陆</NavItem>
        <NavItem className="right">
          <span className="iconfont">&#xe636;</span>
        </NavItem>
        <SearchWrapper>
          <CSSTransition
            nodeRef={ nodeRef }
            in={ props.focused }
            timeout={400}
            classNames="slide"
          >
            <NavSearch
              ref={nodeRef}
              className={ props.focused ? 'focused' : ''}
              onFocus={ props.handleInputFocus }
              onBlur={ props.handleInputBlur }
            />
          </CSSTransition>
          <span className={ props.focused ? 'iconfont focused' : 'iconfont'}>&#xe62d;</span>
        </SearchWrapper>
      </Nav>
      <Addition>
        <Button className="writting">
          <span className="iconfont">&#xe600;</span>
          写文章
        </Button>
        <Button className="reg">注册</Button>
      </Addition>
    </HeaderWrapper>
  )
}

const mapStateToProps = (state) => {
  return {
    focused: state.focused
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus () {
      const action = {
        type: 'search_focus'
      }
      dispatch(action)
    },

    handleInputBlur () {
      const action = {
        type: 'search_blur'
      }
      dispatch(action)
    }

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Header)
