import React, { useContext } from 'react';

import Character from 'domain/models/Character/Character';
import { ReactComponent as FilledHearth } from 'assets/favorito_01.svg';
import { ReactComponent as OutlinedHearth } from 'assets/favorito_02.svg';
import { FavoritesContext } from 'presentation/hooks/modules/character/favorites';

type Props = {
  character: Character;
};

export default function CharacterFavoriteIcon({ character }: Props) {
  const context = useContext(FavoritesContext);

  const { favorites, removeFavorite, addFavorite } = context;

  const isCharacterFavorite = favorites?.some((listCharacter) => listCharacter.id === character.id);

  return isCharacterFavorite ? (
    <FilledHearth onClick={() => removeFavorite(character)} />
  ) : (
    <OutlinedHearth onClick={() => addFavorite(character)} />
  );
}
