import React from 'react';

import Character from 'domain/models/Character/Character';
import Text from 'presentation/components/UI/Typography/Text';
import CharacterFavoriteIcon from 'presentation/components/Modules/Character/FavoriteIcon';
import * as S from './styled';

type Props = {
  character: Character;
};

export default function CharacterThumbnail({ character }: Props) {
  return (
    <>
      <S.Wrapper key={character.id}>
        <S.Icon src={character.thumbnail.mountedThumbnail} alt={character.name} />
      </S.Wrapper>
      <S.Info>
        <Text as="span">{character.name}</Text>
        <CharacterFavoriteIcon character={character} />
      </S.Info>
    </>
  );
}
