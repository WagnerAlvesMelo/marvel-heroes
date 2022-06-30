import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 10%;
  width: 100%;
`;

export const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, max(250px, 100% / 5)), 1fr));
  gap: ${({ theme }) => theme.spacings.medium};
  margin-top: ${({ theme }) => theme.spacings.xsmall};

  li {
    list-style: none;
  }
`;
