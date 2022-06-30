import React from 'react';

import Text from 'presentation/components/UI/Typography/Text';
import { ReactComponent as HeroIcon } from 'assets/ic_heroi.svg';
import { ReactComponent as FavoriteIcon } from 'assets/favorito_03.svg';
import * as S from './styled';

export default function CharacterListHeader() {
  return (
    <S.Wrapper>
      <Text as="span">Encontrados 20 heróis</Text>
      <S.Filters>
        <S.FilterItem>
          <HeroIcon aria-label="Ordenar por nome" />
          <Text as="p">Ordenar por nome - A/Z</Text>
        </S.FilterItem>
        <p>RADIO</p>
        <S.FilterItem>
          <FavoriteIcon aria-label="Somente favoritos" />
          <Text as="p">Somente Favoritos</Text>
        </S.FilterItem>
      </S.Filters>
    </S.Wrapper>
  );
}
