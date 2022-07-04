import styled, { css, DefaultTheme } from 'styled-components';
import { MainLayoutProps } from 'presentation/layouts/Main/index';

export const Background = styled.div<{ bgColor: 'white' | 'green' }>`
  flex: 1;
  display: flex;
  justify-content: center;
  background-color: ${({ bgColor }) => (bgColor === 'white' ? 'white' : '#e7f6e7')};
`;

export const Wrapper = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  max-width: 1200px;
`;

const headerMofidiers = (theme: DefaultTheme) => ({
  size: {
    search: css`
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      form,
      input {
        width: 100%;
      }
    `,
    full: css`
      flex-direction: column;
      gap: ${theme.spacings.xxsmall};
    `,
  },
});

export const Header = styled.header<Pick<MainLayoutProps, 'headerMode'>>`
  display: flex;
  align-items: center;
  width: 100%;
  gap: ${({ theme }) => theme.spacings.xsmall};
  padding-top: ${({ theme }) => theme.spacings.medium};

  ${({ headerMode, theme }) => headerMofidiers(theme).size[headerMode]}
  p {
    margin-bottom: ${({ theme }) => theme.spacings.medium};
  }
`;
