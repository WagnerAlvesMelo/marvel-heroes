import React from 'react';
import { render, screen } from 'utils/test';

import userEvent from '@testing-library/user-event';
import SearchBar from '.';

describe('SearchBar', () => {
  it('should call onChange', () => {
    const changeFn = jest.fn();
    render(<SearchBar onChange={changeFn} />);

    const input = screen.getByRole('textbox');
    userEvent.type(input, 'venom');

    expect(changeFn).toBeCalledWith('venom');
  });

  it('should call onSubmit', () => {
    const submitFn = jest.fn();
    render(<SearchBar onSubmit={submitFn} />);

    const input = screen.getByRole('textbox');
    userEvent.type(input, 'venom{enter}');

    expect(submitFn).toBeCalledWith('venom');
  });
});
