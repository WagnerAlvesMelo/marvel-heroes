import React from 'react';

import Character from 'domain/models/Character/Character';
import CharacterListHeader from 'presentation/components/Modules/Character/CharacterList/Header';
import CharacterThumbnail from 'presentation/components/Modules/Character/CharacterThumbnail';
import FavoriteCharacterContextProvider from 'presentation/hooks/modules/character/favorites';
import * as S from './styled';

type Props = {
  characters: Character[];
};

export default function CharacterList({ characters }: Props) {
  return (
    <FavoriteCharacterContextProvider>
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
    </FavoriteCharacterContextProvider>
  );
}
