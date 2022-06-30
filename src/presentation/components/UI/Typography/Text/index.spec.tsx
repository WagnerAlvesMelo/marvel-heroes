import React from 'react';
import { render, screen } from '@testing-library/react';
import Text from 'presentation/components/UI/Typography/Text/index';

describe('Text', () => {
  it('should render a text correctly', () => {
    render(<Text as="p">Example text</Text>);
    expect(screen.getByText('Example text')).toBeInTheDocument();
  });

  it('should render a text with an indicated tag', () => {
    render(<Text as="span">Example text</Text>);
    expect(screen.getByText('Example text', { selector: 'span' })).toBeInTheDocument();
  });
});
