import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  html {
    overflow-x: hidden;
    background: ${({ theme }) => theme.background};
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    font-family: 'Avenir Next', 'Helvetica Neue', 'Helvetica', sans-serif;
    background: ${({ theme }) => theme.background};
  }
`;
