import styled from 'styled-components';
import Pagination from 'react-paginate';

const Wrapper = styled(Pagination)`
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.font.bold};
  font-size: ${({ theme }) => theme.font.sizes.large};
  padding: ${({ theme }) => theme.spacings.xsmall} 0;

  li {
    list-style: none;
    cursor: pointer;

    &.page {
      padding: 0 ${({ theme }) => theme.spacings.xxsmall};
    }

    &.selected {
      color: ${({ theme }) => theme.colors.title};
    }
  }
`;

export default Wrapper;
