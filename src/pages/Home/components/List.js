import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import {
        ListItem,
        ListInfo } from '../style'

class List extends Component {
  render () {
    const { articleList } = this.props
    return (
      <Fragment>
        {
          articleList.map(item => (
            <ListItem
              key={ item.get('id') }
            >
              <img
                className="article-pic"
                src={ item.get('imgUrl') }
                alt=""
              />
              <ListInfo>
                <h3 className="title">{ item.get('title') }</h3>
                <p className="desc">{ item.get('desc') }</p>
              </ListInfo>
            </ListItem>
          ))
        }
      </Fragment>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    articleList: state.getIn(['home', 'articleList'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}


export default connect(mapStateToProps, mapDispatchToProps)(List)
