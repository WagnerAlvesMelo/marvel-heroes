import styled, { DefaultTheme } from 'styled-components';

import { ReactComponent as StarIconSvg } from 'assets/avaliacao_on.svg';

export const Wrapper = styled.div`
  height: 15px;
`;

const StarIconModifiers = (theme: DefaultTheme) => ({
  filled: `
    fill: ${theme.colors.primary};
  `,
});

export const StarIcon = styled(StarIconSvg)<{ filled: boolean }>`
  g {
    fill: ${({ theme }) => theme.colors.secondary};
    ${({ filled, theme }) => filled && StarIconModifiers(theme).filled};
  }
`;
