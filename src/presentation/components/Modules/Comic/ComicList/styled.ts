import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h3 {
    @media (max-width: 768px) {
      padding-top: ${({ theme }) => theme.spacings.large};
    }
  }
`;

export const List = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: ${({ theme }) => theme.spacings.medium};
  padding-top: ${({ theme }) => theme.spacings.medium};

  @media (max-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ListItem = styled.li`
  list-style: none;

  h5 {
    display: inline-block;
    text-align: left;
    padding-top: ${({ theme }) => theme.spacings.xxsmall};
  }
`;

export const ThumbWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 156.25%;
  display: flex;
  overflow: hidden;

  img {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }
`;
