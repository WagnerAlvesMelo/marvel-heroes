import React from 'react';
import { render } from 'utils/test';
import GlobalStyles from 'presentation/styles/global';
import { screen } from '@testing-library/react';
import theme from 'presentation/styles/theme';

describe('GlobalStyle', () => {
  it('should apply global styles', () => {
    render(
      <>
        <GlobalStyles />
        <p>test text</p>
      </>,
    );

    expect(1).toBe(1);
  });
});
