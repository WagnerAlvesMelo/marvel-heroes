import React, { useContext } from 'react';

import Text from 'presentation/components/UI/Typography/Text';
import { ReactComponent as HeroIcon } from 'assets/ic_heroi.svg';
import { ReactComponent as FavoriteIcon } from 'assets/favorito_03.svg';
import { CharacterSearchContext } from 'presentation/contexts/modules/character/search';
import * as S from './styled';

export default function CharacterListHeader() {
  const search = useContext(CharacterSearchContext);

  return (
    <S.Wrapper>
      <Text as="span" weight="bold">
        {`Encontrados ${search.totalCharacters} heróis`}
      </Text>
      <S.Filters>
        <S.FilterItem onClick={search.toggleOrderByName}>
          <HeroIcon aria-label="Ordenar por nome" />
          <Text as="p">
            {`Ordenar por nome - ${search.orderByName === 'ASC' ? 'A / Z' : 'Z / A'}`}
          </Text>
        </S.FilterItem>
        <S.FilterItem selected={search.favoritesOnly} onClick={search.toggleFavoritesOnly}>
          <FavoriteIcon aria-label="Somente favoritos" />
          <Text as="p">Somente Favoritos</Text>
        </S.FilterItem>
      </S.Filters>
    </S.Wrapper>
  );
}
