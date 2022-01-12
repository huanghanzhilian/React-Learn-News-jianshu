import React, { Component } from 'react'

import {
  DetailWrapper,
  Header,
  Content
} from './style'

class DetailPage extends Component {
  render () {
    return (
      <DetailWrapper>
        <Header>不爱你的时候，你却说爱上我</Header>
        <Content>
          <img
            src="http://blog.cheerspublishing.cn/uploads/article/a0873b2e-5e25-48c0-bc0e-00382fb5fce8.png"
            alt=""
          />
          <p>我承认最终还是修改了节点类， 但毕竟改动很小， 且使得我们能够在后续进一步添加行为时无需再次修改代码。</p>
          <p>现在， 如果我们抽取出所有访问者的通用接口， 所有已有的节点都能与我们在程序中引入的任何访问者交互。 如果需要引入与节点相关的某个行为， 你只需要实现一个新的访问者类即可。</p>
          <h2>真实世界类比</h2>
          <p>假如有这样一位非常希望赢得新客户的资深保险代理人。 他可以拜访街区中的每栋楼， 尝试向每个路人推销保险。 所以， 根据大楼内组织类型的不同， 他可以提供专门的保单：</p>
        </Content>
      </DetailWrapper>
    )
  }
}

export default DetailPage
