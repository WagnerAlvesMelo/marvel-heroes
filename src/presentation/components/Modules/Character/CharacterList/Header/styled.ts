import styled from 'styled-components';

export const Wrapper = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: ${({ theme }) => theme.spacings.xlarge};

  font-size: ${({ theme }) => theme.font.sizes.medium};
`;

export const Filters = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacings.small};
`;

export const FilterItem = styled.div`
  display: flex;
  align-items: center;

  p {
    font-size: ${({ theme }) => theme.font.sizes.xsmall};
  }

  svg {
    margin-right: ${({ theme }) => theme.spacings.xxsmall};
  }
`;
