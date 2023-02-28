import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root {
    --white: #ffffff;
    --orange: #f04e4a;
    --purple: #6e7de0;
    --success: #6dec6d;
    --warning: #ffff71;
    --error: #e44747;
    --customTheme: #000;
    --gray100: #f8f8f8;
    --gray200: #d9d9d9;
    --gray300: #a3a3af;
    --gray: #47465f;
    --gray700: #2D2D2D;
    --black: #000;
  }
  * {
    margin:0;
  }
  html {
    scroll-behavior: smooth;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  body {
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    background: var(--white);
    color: var(--baseSecondary);
    font-size: 16px;
    scrollbar-gutter: stable;
    overflow: overlay;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  .h1, .h2, .h3, .h4, .h5, .h6,
  h1, h2, h3, h4, h5, h6 {
    color: var(--black);
    margin: 0 0 24px;
  }
  .h2, h2 {
    font-size: 3.375rem;
    font-weight: 500;
    line-height: 1.2;
    letter-spacing: -0.00833em;
    @media (max-width: 959.95px) {
      font-size: 2rem;
      text-align: center;
    }
  }
  .h6, h6 {
    font-size: 1.125rem;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 500;
    line-height: 1.6;
    letter-spacing: 0.0075em;
    @media (min-width: 600px) {
      font-size: 1.25rem;
    }
  }
  .p {
    color: var(--gray);
    font-size: 18px;
    line-height: 1.25rem;
  }
`

export default GlobalStyles
