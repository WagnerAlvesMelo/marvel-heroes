import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacings.xsmall};
  padding-top: ${({ theme }) => theme.spacings.medium};

  form,
  input {
    width: 100%;
  }
`;

export default Header;
