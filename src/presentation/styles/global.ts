import { createGlobalStyle, css, DefaultTheme, GlobalStyleComponent } from 'styled-components';

const GlobalStyles: GlobalStyleComponent<{}, DefaultTheme> = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
      display: flex;
      flex: 1;
      flex-direction: column;
      width: 100%;
    }

    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
      display: flex;
      flex: 1 1 0%;
      flex-direction: column;
    }

    #root {
      display: flex;
      flex: 1 1 0%;
      flex-direction: column;
    }
  `}
`;

export default GlobalStyles;
