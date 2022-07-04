import React from 'react';
import { render } from 'utils/test';
import CharacterList from 'presentation/components/Modules/Character/CharacterList/index';

describe('CharacterList', () => {
  it('should render a list with characters thumbnails', () => {
    render(<CharacterList />);
  });
});
