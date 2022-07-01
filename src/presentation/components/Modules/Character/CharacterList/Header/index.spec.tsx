import React from 'react';
import { render } from 'utils/test';
import CharacterListHeader from 'presentation/components/Modules/Character/CharacterList/Header/index';

describe('CharacterListHeader', () => {
  it('should render correctly', () => {
    render(<CharacterListHeader />);
  });
});
