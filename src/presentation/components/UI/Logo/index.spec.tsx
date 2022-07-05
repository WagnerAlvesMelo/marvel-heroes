import React from 'react';
import { MemoryRouter } from 'react-router';
import { render, screen } from 'utils/test';

import Logo from '.';

describe('Logo', () => {
  it('should return default size', () => {
    render(<Logo size="default" />, { wrapper: MemoryRouter });

    expect(screen.getByTestId('small-logo')).toBeInTheDocument();
  });

  it('should return large size', () => {
    render(<Logo size="large" />, { wrapper: MemoryRouter });

    expect(screen.getByTestId('big-logo')).toBeInTheDocument();
  });

  it('should return defaul size without props', () => {
    render(<Logo />, { wrapper: MemoryRouter });

    expect(screen.getByTestId('small-logo')).toBeInTheDocument();
  });
});
