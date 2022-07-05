import React, { useState } from 'react';

import { ReactComponent as SearchIcon } from 'assets/ic_busca_menor.svg';
import * as S from './styled';

type Props = {
  onChange?: (value: string) => void;
  onSubmit?: (value: string) => void;
  defaultValue?: string;
};

export default function SearchBar({ onChange, onSubmit, defaultValue }: Props) {
  const [value, setValue] = useState(defaultValue || '');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    setValue(newValue);
    onChange?.(newValue);
  };

  return (
    <S.Wrapper
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit?.(value);
      }}
    >
      <S.Input defaultValue={value} placeholder="Procure por heróis" onChange={handleChange} />
      <S.IconWrapper>
        <SearchIcon />
      </S.IconWrapper>
    </S.Wrapper>
  );
}
