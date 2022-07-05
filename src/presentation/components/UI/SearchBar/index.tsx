import React, { FormEvent, useContext, useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router';
import { useSearchParams } from 'react-router-dom';

import { ReactComponent as SearchIcon } from 'assets/ic_busca_menor.svg';
import { CharacterSearchContext } from 'presentation/contexts/modules/character/search';
import * as S from './styled';

export default function SearchBar() {
  const location = useLocation();
  const [params] = useSearchParams();
  const navigate = useNavigate();

  const { searchCharacter } = useContext(CharacterSearchContext);
  const [query, setQuery] = useState<string>();
  const firstRender = useRef(true);

  const isHome = location.pathname === '/';

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    const searchParam = params.get('query');
    const formattedQuery = query ? query.trim() : undefined;

    return searchCharacter({
      nameStartsWith: searchParam && firstRender.current ? searchParam.trim() : formattedQuery,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSearch();
    if (!isHome) {
      navigate(`/?query=${query}`);
    }
  };

  useEffect(() => {
    if (isHome) {
      handleSearch();
    }

    firstRender.current = false;
  }, [query, params.get('query')]);

  return (
    <S.Wrapper onSubmit={handleSubmit}>
      <S.Input
        defaultValue={params.get('query') || ''}
        placeholder="Procure por heróis"
        onChange={handleQueryChange}
      />
      <S.IconWrapper>
        <SearchIcon />
      </S.IconWrapper>
    </S.Wrapper>
  );
}
