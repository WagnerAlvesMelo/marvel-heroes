import React from 'react';

import { ReactComponent as HQIcon } from 'assets/ic_quadrinhos.svg';
import { ReactComponent as MovieIcon } from 'assets/ic_trailer.svg';
import HulkImage from 'assets/hulk.png';
import Character from 'domain/models/Character/Character';
import Title from 'presentation/components/UI/Typography/Title';
import Text from 'presentation/components/UI/Typography/Text';
import CharacterFavoriteIcon from 'presentation/components/Modules/Character/FavoriteIcon';
import Rating from 'presentation/components/UI/Rating';
import * as S from './styled';

type Props = {
  character?: Character;
  lastComic?: string;
};

export default function CharacterOverview({ character, lastComic }: Props) {
  if (!character) {
    return <div />;
  }
  return (
    <S.Wrapper>
      <S.CharacterInfos>
        <S.Heading style={{ display: 'flex' }}>
          <Title level={1}>{character?.name}</Title>
          <CharacterFavoriteIcon character={character} />
        </S.Heading>
        <Text as="p">{character?.description || 'Personagem sem descrição'}</Text>
        <S.TotalizersWrapper>
          <div>
            <Title level={4}>Quadrinhos</Title>
            <S.HorizontalAlignedBox>
              <HQIcon />
              <Text as="span" color="title">
                {character.comics.available}
              </Text>
            </S.HorizontalAlignedBox>
          </div>
          <div>
            <Title level={4}>Filmes</Title>
            <S.HorizontalAlignedBox>
              <MovieIcon />
              <Text as="span" color="title">
                {character.series.available}
              </Text>
            </S.HorizontalAlignedBox>
          </div>
        </S.TotalizersWrapper>
        <S.HorizontalAlignedBox>
          <Title level={4}>Rating:</Title>
          <Rating />
        </S.HorizontalAlignedBox>
        <S.HorizontalAlignedBox>
          <Title level={4}>Último quadrinho:</Title>
          <Text as="span">{lastComic}</Text>
        </S.HorizontalAlignedBox>
      </S.CharacterInfos>
      <S.CharacterBanner src={HulkImage} />
      <S.BackgroundText mode="multi" forceSingleModeWidth>
        {character.name}
      </S.BackgroundText>
    </S.Wrapper>
  );
}
