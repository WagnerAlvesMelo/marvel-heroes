import React from 'react';
import { render, screen, waitFor } from 'utils/test';
import { MemoryRouter } from 'react-router';
import userEvent from '@testing-library/user-event';

import { FavoritesContext } from 'presentation/contexts/modules/character/favorites';
import { CharacterSearchContext } from 'presentation/contexts/modules/character/search';
import favoriteContextValuesMock from 'presentation/contexts/modules/character/favorites/mocks';
import characterSearchContextValuesMock from 'presentation/contexts/modules/character/search/mocks';
import Home from '.';

describe('Home', () => {
  it('should call search on change input value', () => {
    const mockedSearchValues = characterSearchContextValuesMock();

    render(
      <FavoritesContext.Provider value={favoriteContextValuesMock()}>
        <CharacterSearchContext.Provider value={mockedSearchValues}>
          <Home />
        </CharacterSearchContext.Provider>
      </FavoritesContext.Provider>,
      { wrapper: MemoryRouter },
    );

    const input = screen.getByRole('textbox');

    userEvent.type(input, 'spider-man');

    return waitFor(() => {
      expect(mockedSearchValues.setSearchQuery).toHaveBeenCalled();
      expect(mockedSearchValues.searchCharacter).toHaveBeenCalled();
    });
  });
});
