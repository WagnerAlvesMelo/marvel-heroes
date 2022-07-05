import React, { useContext, useEffect, useState } from 'react';

import CharacterListHeader from 'presentation/components/Modules/Character/CharacterList/Header';
import CharacterThumbnail from 'presentation/components/Modules/Character/CharacterThumbnail';
import { CharacterSearchContext } from 'presentation/contexts/modules/character/search';
import Pagination from '../../../UI/Pagination';
import * as S from './styled';

export default function CharacterList() {
  const search = useContext(CharacterSearchContext);
  const [page, setPage] = useState(0);

  useEffect(() => {
    search.searchCharacter(page);
  }, [page]);

  const handlePagination = (newPage: number) => {
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    setPage(0);
  }, [search.searchQuery]);

  return (
    <S.Wrapper>
      <CharacterListHeader />
      <S.Grid>
        {search.characters.map((character) => (
          <li key={character.id}>
            <CharacterThumbnail character={character} />
          </li>
        ))}
      </S.Grid>
      <Pagination
        pageCount={Math.ceil(search.totalCharacters / 20)}
        onPageChange={handlePagination}
        page={page}
      />
    </S.Wrapper>
  );
}
