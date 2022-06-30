import styled from 'styled-components';

export const Wrapper = styled.a``;

export const Icon = styled.img`
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: -2px;
    width: 100%;
    height: 2px;
    background: ${({ theme }) => theme.colors.red};
  }
`;
