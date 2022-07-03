import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: 60%;
  margin-top: ${({ theme }) => theme.spacings.medium};
`;

export const Input = styled.input.attrs({ type: 'text' })`
  width: 100%;
  height: 50px;
  border-radius: 50px;
  outline: none;
  border: none;
  background-color: bisque;
  font-size: ${({ theme }) => theme.font.sizes.large};
  padding-left: ${({ theme }) => theme.spacings.xxlarge};
`;

export const IconWrapper = styled.div`
  position: absolute;
  height: 18px;
  top: 50%;
  transform: translateY(-50%);
  left: ${({ theme }) => theme.spacings.small};
`;
