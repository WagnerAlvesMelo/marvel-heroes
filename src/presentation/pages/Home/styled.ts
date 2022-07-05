import styled from 'styled-components';

export const Wrapper = styled.main``;

export const Header = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacings.xxsmall};
  gap: ${({ theme }) => theme.spacings.xsmall};
  padding-top: ${({ theme }) => theme.spacings.medium};

  p {
    margin-bottom: ${({ theme }) => theme.spacings.medium};
  }
`;
