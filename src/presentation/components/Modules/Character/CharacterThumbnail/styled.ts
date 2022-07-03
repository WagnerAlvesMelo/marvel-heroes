import styled from 'styled-components';

export const Wrapper = styled.a`
  width: 50%;
  position: relative;
  cursor: pointer;

  &:after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
`;

export const Icon = styled.img`
  position: absolute;
  opacity: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-shadow: 0 5px 0 0 ${({ theme }) => theme.colors.red};
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: ${({ theme }) => theme.spacings.xsmall};
`;
