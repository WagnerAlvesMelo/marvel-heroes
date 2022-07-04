import React, { useContext, useEffect, useState } from 'react';

import { ReactComponent as SearchIcon } from 'assets/ic_busca_menor.svg';
import { CharacterSearchContext } from 'presentation/contexts/modules/character/search';
import * as S from './styled';

export default function SearchBar() {
  const { searchCharacter } = useContext(CharacterSearchContext);
  const [query, setQuery] = useState<string>('');

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    if (query) {
      searchCharacter({ nameStartsWith: query.trim() });
    } else {
      searchCharacter();
    }
  };

  useEffect(() => {
    handleSearch();
  }, [query]);

  return (
    <S.Wrapper
      onSubmit={(e) => {
        e.preventDefault();
        handleSearch();
      }}
    >
      <S.Input placeholder="Procure por heróis" onChange={handleQueryChange} />
      <S.IconWrapper>
        <SearchIcon />
      </S.IconWrapper>
    </S.Wrapper>
  );
}
