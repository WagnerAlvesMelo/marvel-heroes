import React, { createContext, PropsWithChildren, useMemo, useState } from 'react';

import Character from 'domain/models/Character/Character';
import { GetCharacters } from 'domain/use-cases/Character/getCharacters';
import useServices from 'presentation/hooks/service/service';

type ContextParams = {
  characters: Character[];
  searchCharacter: (params?: GetCharacters.Params) => void;
};

export const CharacterSearchContext = createContext({} as ContextParams);

export default function CharacterSearchContextProvider({ children }: PropsWithChildren) {
  const services = useServices();
  const [characters, setCharacters] = useState<Character[]>([]);

  const searchCharacter = (params?: GetCharacters.Params) => {
    services.characters.getCharacters(params).then((res) => setCharacters(res.results));
  };

  const contextValues = useMemo(
    () => ({
      characters,
      searchCharacter,
    }),
    [characters],
  );

  return (
    <CharacterSearchContext.Provider value={contextValues}>
      {children}
    </CharacterSearchContext.Provider>
  );
}
