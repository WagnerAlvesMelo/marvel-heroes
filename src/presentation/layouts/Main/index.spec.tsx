import React from 'react';
import { render } from 'utils/test';

import { MemoryRouter } from 'react-router';
import MainLayout from '.';

describe('MainLayout', () => {
  it('should render layout with green background', () => {
    const characterRoute = '/character';

    const { container } = render(
      <MemoryRouter initialEntries={[characterRoute]}>
        <MainLayout />
      </MemoryRouter>,
    );

    expect(container.firstChild).toHaveStyle({ 'background-color': '#e7f6e7' });
  });

  it('should render layout with white background', () => {
    const characterRoute = '/';

    const { container } = render(
      <MemoryRouter initialEntries={[characterRoute]}>
        <MainLayout />
      </MemoryRouter>,
    );

    expect(container.firstChild).toHaveStyle({ 'background-color': 'white' });
  });
});
