import React from 'react';
import { render, screen } from 'utils/test';
import userEvent from '@testing-library/user-event';

import makeCharacterMock from 'domain/models/Character/mocks/Character';
import { CharacterSearchContext } from 'presentation/contexts/modules/character/search';
import characterSearchContextValuesMock from 'presentation/contexts/modules/character/search/mocks';
import CharacterList from 'presentation/components/Modules/Character/CharacterList/index';
import { MemoryRouter } from 'react-router';
import { waitFor } from '@testing-library/react';

describe('CharacterList', () => {
  it('should change a page', () => {
    window.scrollTo = jest.fn();
    const value = characterSearchContextValuesMock();
    value.characters = [makeCharacterMock()];
    value.totalCharacters = 40;

    render(
      <CharacterSearchContext.Provider value={value}>
        <CharacterList />
      </CharacterSearchContext.Provider>,
      { wrapper: MemoryRouter },
    );

    const page2Link = screen.getByText('2');
    userEvent.click(page2Link);

    return waitFor(() => {
      expect(value.searchCharacter).toHaveBeenCalledTimes(2);
    });
  });

  it('should return a loading icon', () => {
    const value = characterSearchContextValuesMock();
    value.isLoading = true;

    render(
      <CharacterSearchContext.Provider value={value}>
        <CharacterList />
      </CharacterSearchContext.Provider>,
      { wrapper: MemoryRouter },
    );

    expect(screen.getByAltText('Carregando')).toBeInTheDocument();
  });
});
