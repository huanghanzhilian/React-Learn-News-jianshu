import { fromJS } from 'immutable'

const defaultState = fromJS({
  topicList: [{
    id: 1,
    title: '社会热点',
    imgUrl: 'https://upload.jianshu.io/users/upload_avatars/301940/189d69dd-af7c-4290-9e2c-89e98acf3603.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
  }, {
    id: 2,
    title: '手绘',
    imgUrl: 'https://upload.jianshu.io/users/upload_avatars/3730494/a5859e59-509d-4d2c-a594-d8d6e5c23d68.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
  }],
  articleList: [{
    id: 1,
    title: '利用PDFJS预览pdf文件并加水印',
    desc: '其实我是不建议预览的时候在前端加水印，这种方式简直就是掩耳盗铃，但是在后端处理的成本比较大，服务器资源有限，有时候也要干点知道是蠢事的蠢事',
    imgUrl: 'https://lupic.cdn.bcebos.com/20210629/5852364_14.jpg'
  }, {
    id: 2,
    title: '女孩一定要洁身自爱',
    desc: '文婷与男友恋爱8年，从小青梅竹马，如今文婷怀有5个月的身孕，男友送她回娘家养胎，却没想到，半个月后，男友竟与富家女闪婚了。 得知男友结婚当天，发',
    imgUrl: 'https://lupic.cdn.bcebos.com/20200412/3063506837_14_800_572.jpg'
  }, {
    id: 3,
    title: '利用PDFJS预览pdf文件并加水印',
    desc: '其实我是不建议预览的时候在前端加水印，这种方式简直就是掩耳盗铃，但是在后端处理的成本比较大，服务器资源有限，有时候也要干点知道是蠢事的蠢事',
    imgUrl: 'https://lupic.cdn.bcebos.com/20210629/5852364_14.jpg'
  }, {
    id: 4,
    title: '女孩一定要洁身自爱',
    desc: '文婷与男友恋爱8年，从小青梅竹马，如今文婷怀有5个月的身孕，男友送她回娘家养胎，却没想到，半个月后，男友竟与富家女闪婚了。 得知男友结婚当天，发',
    imgUrl: 'https://lupic.cdn.bcebos.com/20200412/3063506837_14_800_572.jpg'
  }],
  recommendList: [{
    id: 1,
    imgUrl: 'http://developers.cheerspublishing.cn/uploads/article/50b8eef1-6643-44a7-aaa8-fcb469d51cff.png'
  }, {
    id: 2,
    imgUrl: 'http://developers.cheerspublishing.cn/uploads/article/2a82af91-06e2-4419-8969-12b76cc5ad9c.png'
  }],
  writerList: [{
    id: 1,
    imgUrl: 'http://developers.cheerspublishing.cn/uploads/article/ec212e01-906e-415e-af1b-df2a02dbc9f1.png',
    title: '吴晓布',
    desc: '写了744.4k字 · 25.3k喜欢'
  }, {
    id: 2,
    imgUrl: 'http://developers.cheerspublishing.cn/uploads/article/b181c1e3-c930-4a8f-9597-f4f22fc9e6d6.png',
    title: '茶点故事',
    desc: '写了741.3k字 · 16.5k喜欢'
  }, {
    id: 3,
    imgUrl: 'http://developers.cheerspublishing.cn/uploads/article/ec212e01-906e-415e-af1b-df2a02dbc9f1.png',
    title: '吴晓布',
    desc: '写了744.4k字 · 25.3k喜欢'
  }, {
    id: 4,
    imgUrl: 'http://developers.cheerspublishing.cn/uploads/article/b181c1e3-c930-4a8f-9597-f4f22fc9e6d6.png',
    title: '茶点故事',
    desc: '写了741.3k字 · 16.5k喜欢'
  }]
})

const reducer = (state = defaultState, action) => {
  switch(action.type) {
    default:
      return state
  }
}

export default reducer
