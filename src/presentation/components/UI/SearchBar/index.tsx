import React from 'react';

import { ReactComponent as SearchIcon } from 'assets/ic_busca_menor.svg';
import * as S from './styled';

export default function SearchBar() {
  return (
    <S.Wrapper>
      <S.Input placeholder="Procure por heróis" />
      <S.IconWrapper>
        <SearchIcon />
      </S.IconWrapper>
    </S.Wrapper>
  );
}
