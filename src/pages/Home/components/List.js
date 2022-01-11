import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import { actionCreators } from '../store'

import {
  ListItem,
  ListInfo,
  LoadMore
} from '../style'

class List extends Component {
  render () {
    const { articleList, getMoreList, page } = this.props
    return (
      <Fragment>
        {
          articleList.map((item, index) => (
            <ListItem
              key={ index }
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
        <LoadMore onClick={ () => { getMoreList(page) } }>加载更多</LoadMore>
      </Fragment>
    )
  }
}


const mapStateToProps = (state) => ({
  articleList: state.getIn(['home', 'articleList']),
  page: state.getIn(['home', 'articlePage'])
})
const mapDispatchToProps = (dispatch) => ({
  getMoreList (page) {
    dispatch(actionCreators.getMoreList(page))
  }
})


export default connect(mapStateToProps, mapDispatchToProps)(List)
