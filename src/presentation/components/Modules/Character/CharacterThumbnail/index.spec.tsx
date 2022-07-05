import React from 'react';
import { MemoryRouter } from 'react-router';
import { render, screen } from 'utils/test';

import makeCharacterMock from 'domain/models/Character/mocks/Character';
import CharacterThumbnail from '.';

describe('CharacterThumbnail', () => {
  const character = makeCharacterMock();
  it('should render the character image', () => {
    render(<CharacterThumbnail character={character} />, { wrapper: MemoryRouter });

    const characterImage = screen.getByAltText(character.name);

    expect(characterImage).toBeInTheDocument();
    expect(characterImage).toHaveAttribute('src', character.thumbnail.mountedThumbnail);
  });

  it('should render the character name', () => {
    render(<CharacterThumbnail character={character} />, { wrapper: MemoryRouter });

    const characterImage = screen.getByText(character.name);

    expect(characterImage).toBeInTheDocument();
  });
});
