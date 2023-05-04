import styled, { createGlobalStyle, css } from 'styled-components';

const resetCSS = css`
  /* http://meyerweb.com/eric/tools/css/reset/
    v2.0 | 20110126
    License: none (public domain)
  */
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
    min-height: --webkit-fill-available;
    min-height: 100%;
  }
  html {
    height: -webkit-fill-available;
  }
  @supports (-webkit-appearance: none) and (stroke-color: transparent) {
    min-height: -webkit-fill-available;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  a {
    text-decoration: none;
  }
`;

export const GlobalStyle = createGlobalStyle`
  ${resetCSS};
  body {
    font-family: 'Noto Sans KR', sans-serif;
    color: #120D26;
    // background: linear-gradient(to bottom right, #ffffff 0%,#E7EFF6 100%);
    // background: rgba(231, 239, 246, .2);
  }
  input, button {
    font-family: inherit;
    color: inherit;
  }
  * {
    box-sizing: border-box;
  }
`;

export const BaseLayout = styled.div`
  padding: 0 0 120px 0;
  min-height: 100vh;
  overflow-y: auto;
  width: 390px;
  border: 1px solid black;
  margin: 0 auto;
`;
