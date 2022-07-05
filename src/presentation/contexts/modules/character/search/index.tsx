import React, { createContext, PropsWithChildren, useContext, useMemo, useState } from 'react';

import Character from 'domain/models/Character/Character';
import useServices from 'presentation/hooks/service/service';
import { FavoritesContext } from '../favorites';

type ContextParams = {
  characters: Character[];
  totalCharacters: number;
  favoritesOnly: boolean;
  orderByName: boolean;
  searchQuery: string | undefined;
  toggleFavoritesOnly: () => void;
  toggleOrderByName: () => void;
  setSearchQuery: (query?: string) => void;
  searchCharacter: (page?: number) => void;
};

export const CharacterSearchContext = createContext({} as ContextParams);

export default function CharacterSearchContextProvider({ children }: PropsWithChildren) {
  const services = useServices();
  const { favorites } = useContext(FavoritesContext);
  const [characters, setCharacters] = useState<Character[]>([]);
  const [totalCharacters, setTotalCharacters] = useState<number>(0);
  const [favoritesOnly, setFavoritesOnly] = useState<boolean>(false);
  const [orderByName, setOrderByName] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string | undefined>(undefined);

  const searchCharacter = async (page?: number) => {
    const apiResponse = await services.characters.getCharacters({
      nameStartsWith: searchQuery,
      offset: (page || 0) * 20,
    });
    Promise.all([setCharacters(apiResponse.results), setTotalCharacters(apiResponse.total)]);
  };

  const changeSearchQuery = (value?: string) => {
    setSearchQuery(value || undefined);
  };

  const toggleFavoritesOnly = () => {
    setFavoritesOnly(!favoritesOnly);
  };

  const toggleOrderByName = () => {
    setOrderByName(!orderByName);
  };

  const sortByName = (a: Character, b: Character) => a.name.localeCompare(b.name);

  const formattedCharacters = () => {
    const list = (favoritesOnly ? favorites : characters) || [];

    return orderByName ? [...list].sort(sortByName) : list;
  };

  const contextValues: ContextParams = useMemo(() => {
    const charactersToReturn = formattedCharacters();

    return {
      characters: charactersToReturn,
      totalCharacters: favoritesOnly ? charactersToReturn.length : totalCharacters,
      favoritesOnly,
      orderByName,
      searchQuery,
      searchCharacter,
      setSearchQuery: changeSearchQuery,
      toggleFavoritesOnly,
      toggleOrderByName,
    };
  }, [characters, totalCharacters, favoritesOnly, orderByName, favorites, searchQuery]);

  return (
    <CharacterSearchContext.Provider value={contextValues}>
      {children}
    </CharacterSearchContext.Provider>
  );
}
