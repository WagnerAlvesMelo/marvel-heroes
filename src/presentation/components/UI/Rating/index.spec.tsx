import React from 'react';
import { render, screen } from 'utils/test';

import Rating from './index';

describe('Rating', () => {
  it('should render 5 stars', () => {
    render(<Rating />);
    expect(screen.getAllByTestId('rating-star').length).toBe(5);
  });
});
