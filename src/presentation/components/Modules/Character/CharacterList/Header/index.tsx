import React from 'react';

import Text from 'presentation/components/UI/Typography/Text';
import { ReactComponent as HeroIcon } from 'assets/ic_heroi.svg';
import { ReactComponent as FavoriteIcon } from 'assets/favorito_03.svg';
import Toggle from 'presentation/components/UI/Toggle';
import * as S from './styled';

export default function CharacterListHeader() {
  return (
    <S.Wrapper>
      <Text as="span" weight="bold">
        Encontrados 20 heróis
      </Text>
      <S.Filters>
        <S.FilterItem>
          <HeroIcon aria-label="Ordenar por nome" />
          <Text as="p" color="primary">
            Ordenar por nome - A/Z
          </Text>
        </S.FilterItem>
        <Toggle />
        <S.FilterItem>
          <FavoriteIcon aria-label="Somente favoritos" />
          <Text as="p" color="primary">
            Somente Favoritos
          </Text>
        </S.FilterItem>
      </S.Filters>
    </S.Wrapper>
  );
}
