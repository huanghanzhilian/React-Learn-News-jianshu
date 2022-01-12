import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import {
  DetailWrapper,
  Header,
  Content
} from './style'

class DetailPage extends PureComponent {
  render () {

    const { title, content } = this.props

    return (
      <DetailWrapper>
        <Header>{ title }</Header>
        <Content dangerouslySetInnerHTML={{ __html: content }} />
      </DetailWrapper>
    )
  }
}

const mapState = (state) => ({
  title: state.getIn(['detail', 'title']),
  content: state.getIn(['detail', 'content'])
})

const mapDispatch = (state) => ({

})


export default connect(mapState, mapDispatch)(DetailPage)
