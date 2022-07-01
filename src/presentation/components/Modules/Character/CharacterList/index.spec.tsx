import React from 'react';
import { render } from 'utils/test';
import CharacterList from 'presentation/components/Modules/Character/CharacterList/index';
import makeCharacterMock from 'domain/models/Character/mocks/Character';
import CharacterThumbnail from 'presentation/components/Modules/Character/CharacterThumbnail';

describe('CharacterList', () => {
  it('should render a list with characters thumbnails', () => {
    render(<CharacterList characters={[<CharacterThumbnail character={makeCharacterMock()} />]} />);
  });
});
