import React from 'react';
import { render, screen } from 'utils/test';

import { CharacterSearchContext } from 'presentation/contexts/modules/character/search';
import characterSearchContextValuesMock from 'presentation/contexts/modules/character/search/mocks';
import Router from '.';

describe('Router', () => {
  it('should render the home page', () => {
    render(
      <CharacterSearchContext.Provider value={characterSearchContextValuesMock()}>
        <Router />
      </CharacterSearchContext.Provider>,
    );

    expect(screen.getByText('EXPLORE O UNIVERSO')).toBeInTheDocument();
  });
});
