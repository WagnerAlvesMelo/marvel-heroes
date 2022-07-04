import React from 'react';

import Comic from 'domain/models/Comic/Comic';
import Title from 'presentation/components/UI/Typography/Title';
import * as S from './styled';

type Props = {
  comics: Comic[];
};

export default function ComicList({ comics }: Props) {
  return (
    <S.Wrapper>
      <Title level={3}>Últimos lançamentos</Title>
      <S.List>
        {comics.map((comic) => (
          <S.ListItem key={comic.id}>
            <S.ThumbWrapper>
              <img src={comic.thumbnail.mountedThumbnail} alt={comic.title} />
            </S.ThumbWrapper>
            <Title level={5}>{comic.title}</Title>
          </S.ListItem>
        ))}
      </S.List>
    </S.Wrapper>
  );
}
