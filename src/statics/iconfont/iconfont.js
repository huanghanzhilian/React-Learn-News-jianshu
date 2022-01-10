import { createGlobalStyle } from 'styled-components'

const GlobalIconFont = createGlobalStyle`
  @font-face {
    font-family: 'iconfont';  /* project id 3123731 */
    src: url('');
    src: url('?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_3123731_12vqb6j0xsoi.woff2') format('woff2'),
    url('//at.alicdn.com/t/font_3123731_12vqb6j0xsoi.woff') format('woff'),
    url('//at.alicdn.com/t/font_3123731_12vqb6j0xsoi.ttf') format('truetype'),
    url('#iconfont') format('svg');
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
