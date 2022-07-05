import React from 'react';
import { MemoryRouter } from 'react-router';
import { render, screen, waitFor } from 'utils/test';

import userEvent from '@testing-library/user-event';
import CharacterDetails from '.';
import { CharacterSearchContext } from '../../../contexts/modules/character/search';
import characterSearchContextValuesMock from '../../../contexts/modules/character/search/mocks';

describe('CharacterDetails', () => {
  it('should get character text description', () => {
    render(<CharacterDetails />, { wrapper: MemoryRouter });
    return waitFor(() => {
      expect(screen.queryByText(/MockedDescription/i)).toBeInTheDocument();
    });
  });

  it('should call navigation on submit form', () => {
    const mockedContextValue = characterSearchContextValuesMock();
    render(
      <CharacterSearchContext.Provider value={mockedContextValue}>
        <CharacterDetails />
      </CharacterSearchContext.Provider>,
      { wrapper: MemoryRouter },
    );

    const input = screen.getByRole('textbox');

    userEvent.type(input, 'venom{enter}');

    return waitFor(() => {
      expect(mockedContextValue.setSearchQuery).toBeCalled();
    });
  });
});
