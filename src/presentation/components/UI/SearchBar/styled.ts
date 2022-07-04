import styled from 'styled-components';

export const Wrapper = styled.form`
  position: relative;
  width: 60%;
`;

export const Input = styled.input.attrs({ type: 'text' })`
  width: 100%;
  height: 50px;
  border-radius: 50px;
  outline: none;
  border: none;
  background-color: #fdecec;
  color: #ff0000;
  font-size: ${({ theme }) => theme.font.sizes.large};
  padding-left: ${({ theme }) => theme.spacings.xxlarge};

  &::placeholder {
    color: #ff0000;
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  height: 18px;
  top: 50%;
  transform: translateY(-50%);
  left: ${({ theme }) => theme.spacings.small};
`;
