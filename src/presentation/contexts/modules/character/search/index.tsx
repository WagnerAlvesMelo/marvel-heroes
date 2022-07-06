import React, { createContext, PropsWithChildren, useContext, useMemo, useState } from 'react';

import Character from 'domain/models/Character/Character';
import useServices from 'presentation/hooks/service/service';
import { FavoritesContext } from '../favorites';

type ContextParams = {
  characters: Character[];
  totalCharacters: number;
  favoritesOnly: boolean;
  orderByName: 'ASC' | 'DESC';
  searchQuery: string | undefined;
  isLoading: boolean;
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
  const [orderByName, setOrderByName] = useState<'ASC' | 'DESC'>('ASC');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string | undefined>(undefined);

  const searchCharacter = async (page?: number) => {
    setIsLoading(true);
    const apiResponse = await services.characters.getCharacters({
      nameStartsWith: searchQuery,
      offset: (page || 0) * 20,
    });
    Promise.all([setCharacters(apiResponse.results), setTotalCharacters(apiResponse.total)]);
    setIsLoading(false);
  };

  const changeSearchQuery = (value?: string) => {
    setSearchQuery(value || undefined);
  };

  const toggleFavoritesOnly = () => {
    setFavoritesOnly(!favoritesOnly);
  };

  const toggleOrderByName = () => {
    setOrderByName(orderByName === 'ASC' ? 'DESC' : 'ASC');
  };

  const sortByName = (a: Character, b: Character) => a.name.localeCompare(b.name);

  const formattedCharacters = () => {
    const favoriteFilter = (character: Character) => {
      const characterName = searchQuery?.toLowerCase() || '';
      return searchQuery ? character.name.toLowerCase().includes(characterName) : true;
    };
    const filteredFavorites = favorites?.filter(favoriteFilter);

    const list = [...((favoritesOnly ? filteredFavorites : characters) || [])].sort(sortByName);

    return orderByName === 'ASC' ? list : list.reverse();
  };

  const contextValues: ContextParams = useMemo(() => {
    const charactersToReturn = formattedCharacters();

    return {
      characters: charactersToReturn,
      totalCharacters: favoritesOnly ? charactersToReturn.length : totalCharacters,
      favoritesOnly,
      orderByName,
      searchQuery,
      isLoading,
      searchCharacter,
      setSearchQuery: changeSearchQuery,
      toggleFavoritesOnly,
      toggleOrderByName,
    };
  }, [characters, totalCharacters, favoritesOnly, orderByName, favorites, searchQuery, isLoading]);

  return (
    <CharacterSearchContext.Provider value={contextValues}>
      {children}
    </CharacterSearchContext.Provider>
  );
}
