import React, { createContext, PropsWithChildren, useEffect, useMemo, useState } from 'react';
import Character from 'domain/models/Character/Character';
import { plainToClassInstance } from 'infra/adapters/class/type-mapper';

type ContextParams = {
  favorites?: Character[];
  addFavorite: (character: Character) => void;
  removeFavorite: (character: Character) => void;
};

export const FavoritesContext = createContext<ContextParams>({} as ContextParams);

export default function FavoriteCharacterContextProvider({ children }: PropsWithChildren) {
  function getFavoriteCharactersFromLocalStorage(): Character[] {
    return JSON.parse(localStorage.getItem('favorites') || '[]');
  }

  const [favorites, setFavorites] = useState<Character[]>(
    plainToClassInstance(Character, getFavoriteCharactersFromLocalStorage()),
  );

  useEffect(() => {
    if (favorites.length) {
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
  }, [favorites]);

  const addFavorite = (character: Character) => {
    if (favorites.length === 5) {
      throw new Error('Apenas 5 heróis podem ser adicionados a lista de favoritos');
    }

    setFavorites(favorites.concat([character]));
  };

  const removeFavorite = (character: Character) => {
    setFavorites(favorites.filter((listCharacter) => listCharacter.id !== character.id));
  };

  const contextValue = useMemo(
    () => ({
      favorites,
      addFavorite,
      removeFavorite,
    }),
    [favorites, addFavorite, removeFavorite],
  );

  return <FavoritesContext.Provider value={contextValue}>{children}</FavoritesContext.Provider>;
}
