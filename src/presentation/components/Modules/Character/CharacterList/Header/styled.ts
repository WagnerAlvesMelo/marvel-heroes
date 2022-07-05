import styled from 'styled-components';

export const Wrapper = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: ${({ theme }) => theme.spacings.medium};

  font-size: ${({ theme }) => theme.font.sizes.medium};
`;

export const Filters = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacings.small};
`;

export const FilterItem = styled.div<{ selected: boolean }>`
  display: flex;
  align-items: center;
  cursor: pointer;

  p {
    font-size: ${({ theme }) => theme.font.sizes.small};
    color: ${({ theme, selected }) => (selected ? theme.colors.primary : theme.colors.text)};
  }

  svg {
    margin-right: ${({ theme }) => theme.spacings.xxsmall};

    g {
      fill: ${({ theme, selected }) => (selected ? theme.colors.primary : theme.colors.text)};
    }
  }
`;
