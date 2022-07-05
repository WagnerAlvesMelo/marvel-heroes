import React from 'react';
import { render, screen } from 'utils/test';

import userEvent from '@testing-library/user-event';
import { waitFor } from '@testing-library/react';
import Pagination from '.';

describe('Pagination', () => {
  it('should render pages based on props', () => {
    render(<Pagination pageCount={3} page={0} onPageChange={jest.fn} />);
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
  });

  it('should call function on page change', () => {
    const changeFn = jest.fn();
    render(<Pagination pageCount={3} page={0} onPageChange={changeFn} />);

    userEvent.click(screen.getByText('2'));

    return waitFor(() => {
      expect(changeFn).toHaveBeenCalled();
    });
  });
});
