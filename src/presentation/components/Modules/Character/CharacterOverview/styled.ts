import styled from 'styled-components';
import { Textfit } from 'react-textfit';

export const Wrapper = styled.section`
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: ${({ theme }) => theme.spacings.medium};

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    img {
      display: none;
    }
  }
`;

export const CharacterInfos = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  z-index: 10;
  font-size: ${({ theme }) => theme.spacings.xsmall};
  margin-top: ${({ theme }) => theme.spacings.large};

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const Heading = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacings.xsmall};
`;

export const TotalizersWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: ${({ theme }) => theme.spacings.xsmall} 0;

  & > div {
    display: flex;
    flex-direction: column;

    h4 {
      margin-bottom: ${({ theme }) => theme.spacings.xxsmall};
    }
  }
`;

export const HorizontalAlignedBox = styled.div`
  display: flex;
  align-items: center;

  & + div {
    margin-top: ${({ theme }) => theme.spacings.xsmall};
  }

  svg,
  h4 {
    margin-right: ${({ theme }) => theme.spacings.xxsmall};
  }
`;

export const CharacterBanner = styled.img`
  display: block;
  margin: auto;
  height: 500px;
  z-index: 10;
  width: 320px;
  object-fit: cover;
`;

export const BackgroundText = styled(Textfit)`
  position: absolute;
  top: 40%;
  transform: translateY(-50%);
  color: white;
  font-size: 100px !important;
  text-align: right;
  right: 0;
  z-index: 1;
  font-weight: ${({ theme }) => theme.font.bold};
`;
