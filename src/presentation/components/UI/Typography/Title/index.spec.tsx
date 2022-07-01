import React from 'react';
import { render, screen } from 'utils/test';
import Title from 'presentation/components/UI/Typography/Title/index';

describe('Title', () => {
  it('should render a text correctly', () => {
    render(<Title level={1}>Example title</Title>);
    expect(screen.getByText('Example title')).toBeInTheDocument();
  });

  it('should render a text with an indicated tag', () => {
    render(<Title level={3}>Example title</Title>);
    expect(screen.getByText('Example title', { selector: 'h3' })).toBeInTheDocument();
  });
});
