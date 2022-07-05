import React, { useContext } from 'react';
import CharacterListHeader from 'presentation/components/Modules/Character/CharacterList/Header';
import CharacterThumbnail from 'presentation/components/Modules/Character/CharacterThumbnail';
import { CharacterSearchContext } from 'presentation/contexts/modules/character/search';
import * as S from './styled';

export default function CharacterList() {
  const { characters } = useContext(CharacterSearchContext);

  return (
    <S.Wrapper>
      <CharacterListHeader />
      <S.Grid>
        {characters.map((character) => (
          <li key={character.id}>
            <CharacterThumbnail character={character} />
          </li>
        ))}
      </S.Grid>
    </S.Wrapper>
  );
}
