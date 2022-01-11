import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  WriterWrapper,
  WriterHeader,
  WriterItem
} from '../style'

class Writer extends Component {
  render () {
    const { list } = this.props

    return (
      <WriterWrapper>
        <WriterHeader>
          <div className="recom-writer">推荐作者</div>
          <div className="recom-operator">
            <span className="iconfont spin">&#xe851;</span>
            换一批
          </div>
        </WriterHeader>
        {
          list.map(item => (
            <WriterItem key={ item.get('id') }>
              <img
                className="pic"
                src={ item.get('imgUrl') }
                alt=""
              />
              <div className="writer-info">
                <p className="writer-name">{ item.get('title') }</p>
                <p className="writer-desc">{ item.get('desc') }</p>
              </div>
            </WriterItem>
          ))
        }
      </WriterWrapper>
    )
  }
}

const mapState = (state) => ({
  list: state.getIn(['home', 'writerList'])
})

const mapDispatch = (dispatch) => ({

})


export default connect(mapState, mapDispatch)(Writer)
