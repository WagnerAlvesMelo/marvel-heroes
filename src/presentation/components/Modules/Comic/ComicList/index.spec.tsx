import React from 'react';
import { render, screen } from 'utils/test';

import makeComicMock from 'domain/models/Comic/mocks/Comic';
import ComicList from '.';

describe('ComicList', () => {
  it('should render a comic list', () => {
    const comic = makeComicMock();
    render(<ComicList comics={[comic]} />);

    expect(screen.getByText(comic.title)).toBeInTheDocument();
  });
});
