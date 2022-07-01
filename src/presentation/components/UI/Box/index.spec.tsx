import React from 'react';
import { render, screen } from 'utils/test';
import Box from 'presentation/components/UI/Box/index';

describe('Box', () => {
  it('should render chilren', () => {
    render(
      <Box>
        <p>Test Text</p>
      </Box>,
    );
    expect(screen.getByText('Test Text')).toBeInTheDocument();
  });

  it('should display flex props', () => {
    const { container } = render(
      <Box alignItems="center" justifyContent="center" flexDirection="column">
        <p>Test Text</p>
      </Box>,
    );
    expect(container.firstChild).toHaveStyle({ 'align-items': 'center' });
    expect(container.firstChild).toHaveStyle({ 'justify-content': 'center' });
    expect(container.firstChild).toHaveStyle({ 'flex-direction': 'column' });
  });

  it('should display background color', () => {
    const { container } = render(
      <Box backgroundColor="blue">
        <p>Test Text</p>
      </Box>,
    );
    expect(container.firstChild).toHaveStyle({ 'background-color': 'blue' });
  });

  it('should use 100% width if has container prop', () => {
    const { container } = render(
      <Box container>
        <p>Test Text</p>
      </Box>,
    );
    expect(container.firstChild).toHaveStyle({ width: '100%' });
  });
});
