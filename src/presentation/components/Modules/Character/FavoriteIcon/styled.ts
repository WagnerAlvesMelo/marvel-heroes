import styled, { DefaultTheme } from 'styled-components';

const wrapperModifier = (theme: DefaultTheme) => ({
  favorite: {
    fill: theme.colors.primary,
  },
});

const Wrapper = styled.i<{ favorite?: boolean }>`
  cursor: pointer;
  svg {
    height: 20px;
    width: 20px;

    g {
      ${({ favorite, theme }) => favorite && wrapperModifier(theme).favorite};
    }
  }
`;

export default Wrapper;
