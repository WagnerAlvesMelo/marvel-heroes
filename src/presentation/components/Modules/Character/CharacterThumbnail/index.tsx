import React from 'react';

import Character from 'domain/models/Character/Character';
import Text from 'presentation/components/UI/Typography/Text';
import * as S from './styled';

type Props = {
  character: Character;
};

export default function CharacterThumbnail({ character }: Props) {
  return (
    <S.Wrapper>
      <S.Icon src={character.thumbnail.mountedThumbnail} alt={character.name} />
      <S.Info>
        <Text as="span">{character.name}</Text>
      </S.Info>
    </S.Wrapper>
  );
}
