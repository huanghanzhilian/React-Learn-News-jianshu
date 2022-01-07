import { createGlobalStyle } from 'styled-components'
import woff2IconFont from './iconfont.woff2'
import woffIconFont from './iconfont.woff'
import ttfIconFont from './iconfont.ttf'

const GlobalIconFont = createGlobalStyle`
  @font-face {
    font-family: 'iconfont';
    src: url('${woff2IconFont}') format('woff2'),
         url('${woffIconFont}') format('woff'),
         url('${ttfIconFont}') format('truetype');
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

export default GlobalIconFont
