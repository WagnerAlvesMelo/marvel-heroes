import React from 'react';

import * as S from './styled';

export default function Rating() {
  const randomRating = Math.floor(Math.random() * 5) + 1;

  return (
    <S.Wrapper>
      {[...Array(5)].map((_, index) => (
        <S.StarIcon data-testid="rating-star" filled={index < randomRating} />
      ))}
    </S.Wrapper>
  );
}
