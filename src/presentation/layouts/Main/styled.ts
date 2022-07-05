import styled from 'styled-components';

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
