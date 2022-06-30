import React from 'react';

import Character from 'domain/models/Character';
import * as S from './styled';

type Props = {
  character: Character;
};

export default function CharacterThumbnail({ character }: Props) {
  return (
    <S.Wrapper>
      <S.Icon src={character.thumbnail.mountedThumbnail} alt={character.name} />
    </S.Wrapper>
  );
}
