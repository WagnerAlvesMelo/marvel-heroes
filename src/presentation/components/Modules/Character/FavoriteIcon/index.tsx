import React, { useContext } from 'react';
import { toast } from 'react-toastify';

import Character from 'domain/models/Character/Character';
import { ReactComponent as OutlinedHearth } from 'assets/favorito_02.svg';
import { FavoritesContext } from 'presentation/contexts/modules/character/favorites';
import Wrapper from './styled';

type Props = {
  character: Character;
};

export default function CharacterFavoriteIcon({ character }: Props) {
  const context = useContext(FavoritesContext);

  const { favorites, removeFavorite, addFavorite } = context;

  const isCharacterFavorite = favorites?.some((listCharacter) => listCharacter.id === character.id);

  const handleAddFavorite = () => {
    try {
      addFavorite(character);
    } catch (error) {
      if (error instanceof Error) {
        toast(error.message, { type: 'error', position: 'bottom-right' });
      }
    }
  };

  const handleClick = () => {
    if (isCharacterFavorite) {
      removeFavorite(character);
    } else {
      handleAddFavorite();
    }
  };

  return (
    <Wrapper favorite={isCharacterFavorite} style={{ cursor: 'pointer' }}>
      <OutlinedHearth data-testid="favorite-icon" onClick={handleClick} />
    </Wrapper>
  );
}
