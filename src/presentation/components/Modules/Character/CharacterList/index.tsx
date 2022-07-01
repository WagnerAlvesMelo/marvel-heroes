import React from 'react';

import CharacterListHeader from 'presentation/components/Modules/Character/CharacterList/Header';
import * as S from './styled';

type Props = {
  characters: React.ReactNode[];
};

export default function CharacterList({ characters }: Props) {
  return (
    <S.Wrapper>
      <CharacterListHeader />
      <S.Grid>
        {characters.map((character) => (
          <li key={character?.toString()}>{character}</li>
        ))}
      </S.Grid>
    </S.Wrapper>
  );
}
