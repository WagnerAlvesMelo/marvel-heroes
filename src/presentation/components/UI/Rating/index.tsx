import React from 'react';

import { ReactComponent as StarIcon } from 'assets/avaliacao_on.svg';
import * as S from './styled';

export default function Rating() {
  const randomRating = Math.floor(Math.random() * 5) + 1;

  return (
    <S.Wrapper>
      {[...Array(5)].map((_, index) => (
        <S.StarIcon filled={index < randomRating} />
      ))}
    </S.Wrapper>
  );
}
