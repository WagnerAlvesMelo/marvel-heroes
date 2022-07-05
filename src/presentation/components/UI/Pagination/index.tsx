import React from 'react';

import Wrapper from './styled';

type Props = {
  pageCount: number;
  page: number;
  onPageChange: (page: number) => void;
};

export default function Pagination({ pageCount, page, onPageChange }: Props) {
  return (
    <Wrapper
      previousLabel="<"
      pageCount={pageCount}
      onPageChange={(value) => {
        onPageChange(value.selected);
      }}
      forcePage={page}
      pageRangeDisplayed={5}
      nextLabel=">"
      pageClassName="page"
      renderOnZeroPageCount={() => null}
    />
  );
}
