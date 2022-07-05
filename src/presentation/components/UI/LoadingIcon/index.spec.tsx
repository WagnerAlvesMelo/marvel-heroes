import React from 'react';
import { render, screen } from 'utils/test';

import LoadingIcon from '.';

describe('LoadingIcon', () => {
  it('should return a loading image', () => {
    render(<LoadingIcon />);

    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
