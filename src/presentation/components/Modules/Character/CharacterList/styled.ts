import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({ theme }) => theme.spacings.medium};
  margin-top: ${({ theme }) => theme.spacings.xsmall};

  li {
    list-style: none;
  }
`;
