import styled from 'styled-components'

export const HomeWrapper = styled.div`
  overflow: hidden;
  margin: 0 auto;
  width: 960px;
`

export const HomeLift = styled.div`
  float: left;
  margin-left: 15px;
  margin-top: 30px;
  width: 625px;
  .banner-img {
    width: 625px;
    height: 270px;
  }
`

export const HomeRight = styled.div`
  float: right;
  width: 280px;
`

export const TopicWrapper = styled.div`
  overflow: hidden;
  padding: 20px 0 10px 0;
  margin-left: -18px;
  border-bottom: 1px solid #dcdcdc;
`

export const TopicItem = styled.div`
  overflow: hidden;
  float: left;
  padding-right: 10px;
  margin-left: 18px;
  margin-bottom: 18px;
  height: 32px;
  line-height: 32px;
  background-color: #f7f7f7;
  font-size: 14px;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  .topic-pic {
    float: left;
    margin-right: 10px;
    width: 32px;
    height: 32px;
  }
`

export const ListItem = styled.div`
  overflow: hidden;
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  .article-pic {
    float: right;
    margin-left: 10px;
    width: 125px;
    height: 100px;
    border-radius: 10px;
  }
`
export const ListInfo = styled.div`
  .title {
    line-height: 27px;
    font-size: 18px;
    font-weight: bold
  }
  .desc {
    line-height: 24px;
    font-size: 13px;
    color: #999;
  }
`

export const RecommendWrapper = styled.div`
  margin: 30px 0;
  width: 280px;
`
export const RecommendItem = styled.div`
  margin-bottom: 5px;
  width: 280px;
  height: 50px;
  background-image: url(${(props) => props.imgUrl});
  background-repeat: no-repeat;
  background-size: contain;
`

export const WriterWrapper = styled.div`
  overflow: hidden;
  width: 278px;
  border: 1px solide #dcdcdc;
  border-radius: 3px;
`

export const WriterHeader = styled.div`
  overflow: hidden;
  line-height: 30px;
  font-size: 14px;
  color: #969696;
  .recom-writer {
    float: left;
  }
  .recom-operator {
    float: right;
  }
  .spin {
    font-size: 12px;
    margin-right: 5px;
  }
`

export const WriterItem = styled.div`
  margin-bottom: 20px;
  overflow: hidden;
  .pic {
    float: left;
    margin-right: 10px;
    width: 48px;
    height: 48px;
    border-radius: 24px;
    border: 1px solid #ddd;
  }
  .writer-info {}
  .writer-name {
    line-height: 28px;
    font-size: 14px;
    color: #333;
  }
  .writer-desc {
    margin-top: 2px;
    font-size: 12px;
    color: #969696;
  }
`

export const LoadMore = styled.div`
  margin: 30px 0;
  width: 100%;
  height: 40px;
  line-height: 40px;
  background-color: #a5a5a5;
  text-align: center;
  border-radius: 20px;
  color: #fff;
  cursor: pointer;
`
