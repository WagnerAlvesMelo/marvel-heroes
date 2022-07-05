import React from 'react';
import { render, screen } from 'utils/test';
import userEvent from '@testing-library/user-event';

import makeCharacterMock from 'domain/models/Character/mocks/Character';
import { FavoritesContext } from 'presentation/contexts/modules/character/favorites';
import favoriteContextValuesMock from 'presentation/contexts/modules/character/favorites/mocks';
import { waitFor } from '@testing-library/react';
import CharacterFavoriteIcon from './index';

describe('CharacterFavoriteIcon', () => {
  it('should call addFavorite', () => {
    const mockedContextValue = favoriteContextValuesMock();

    render(
      <FavoritesContext.Provider value={mockedContextValue}>
        <CharacterFavoriteIcon character={makeCharacterMock()} />
      </FavoritesContext.Provider>,
    );

    const icon = screen.getByTestId('favorite-icon');
    userEvent.click(icon);

    expect(mockedContextValue.addFavorite).toHaveBeenCalled();
  });

  it('should call removeFavorte', () => {
    const mockedContextValue = favoriteContextValuesMock();
    mockedContextValue.favorites = [makeCharacterMock()];

    render(
      <FavoritesContext.Provider value={mockedContextValue}>
        <CharacterFavoriteIcon character={makeCharacterMock()} />
      </FavoritesContext.Provider>,
    );

    const icon = screen.getByTestId('favorite-icon');
    userEvent.click(icon);
    userEvent.click(icon);

    expect(mockedContextValue.removeFavorite).toHaveBeenCalled();
  });

  it('should catch an error on addFavorite', () => {
    const mockedContextValue = favoriteContextValuesMock();

    mockedContextValue.addFavorite.mockImplementation(() => {
      throw new Error('Apenas 5 heróis podem ser adicionados a lista de favoritos');
    });

    render(
      <FavoritesContext.Provider value={mockedContextValue}>
        <CharacterFavoriteIcon character={makeCharacterMock()} />
      </FavoritesContext.Provider>,
    );

    const icon = screen.getByTestId('favorite-icon');
    userEvent.click(icon);

    return waitFor(() => {
      expect(
        screen.getByText(/Apenas 5 heróis podem ser adicionados a lista de favoritos/i),
      ).toBeInTheDocument();
    });
  });
});
