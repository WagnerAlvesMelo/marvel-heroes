import { createGlobalStyle, css, DefaultTheme, GlobalStyleComponent } from 'styled-components';

const GlobalStyles: GlobalStyleComponent<any, DefaultTheme> = createGlobalStyle`
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

  ${({ theme }: { theme: DefaultTheme }) => css`
    html {
      font-size: 62.5%;
      display: flex;
      flex-direction: column;
      width: 100%;
      min-height: 100%;
    }

    body {
      height: 100%;
      min-height: 100%;
      display: flex;
      flex: 1 1 0%;
      flex-direction: column;
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
    }

    #root {
      display: flex;
      flex: 1 1 0%;
      flex-direction: column;
      min-height: 100%;
      overflow-y: auto;
    }

    * {
      font-family: ${theme.font.family};
    }
  `}
`;

export default GlobalStyles;
