import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import Character from 'domain/models/Character/Character';
import { GetCharacters } from 'domain/use-cases/Character/getCharacters';
import useServices from 'presentation/hooks/service/service';
import { FavoritesContext } from '../favorites';

type ContextParams = {
  characters: Character[];
  totalCharacters: number;
  favoritesOnly: boolean;
  orderByName: boolean;
  toggleFavoritesOnly: () => void;
  toggleOrderByName: () => void;
  searchCharacter: (params?: GetCharacters.Params, page?: number) => void;
};

export const CharacterSearchContext = createContext({} as ContextParams);

export default function CharacterSearchContextProvider({ children }: PropsWithChildren) {
  const services = useServices();
  const { favorites } = useContext(FavoritesContext);
  const [characters, setCharacters] = useState<Character[]>([]);
  const [totalCharacters, setTotalCharacters] = useState<number>(0);
  const [favoritesOnly, setFavoritesOnly] = useState<boolean>(false);
  const [orderByName, setOrderByName] = useState<boolean>(false);

  const searchCharacter = async (params?: GetCharacters.Params, page?: number) => {
    const apiResponse = await services.characters.getCharacters({
      ...params,
      offset: (page || 0) * 20,
    });
    Promise.all([setCharacters(apiResponse.results), setTotalCharacters(apiResponse.total)]);
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

    if (orderByName) {
      return [...list].sort(sortByName);
    }

    return list;
  };

  const contextValues: ContextParams = useMemo(() => {
    const charactersToReturn = formattedCharacters();

    return {
      characters: charactersToReturn,
      totalCharacters: favoritesOnly ? charactersToReturn.length : totalCharacters,
      favoritesOnly,
      orderByName,
      searchCharacter,
      toggleFavoritesOnly,
      toggleOrderByName,
    };
  }, [characters, totalCharacters, favoritesOnly, orderByName, favorites]);

  return (
    <CharacterSearchContext.Provider value={contextValues}>
      {children}
    </CharacterSearchContext.Provider>
  );
}
