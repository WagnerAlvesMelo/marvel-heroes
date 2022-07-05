import React, { useContext, useEffect, useState } from 'react';

import { CharacterSearchContext } from 'presentation/contexts/modules/character/search';
import CharacterListHeader from 'presentation/components/Modules/Character/CharacterList/Header';
import CharacterThumbnail from 'presentation/components/Modules/Character/CharacterThumbnail';
import Pagination from 'presentation/components/UI/Pagination';
import FailIcon from 'assets/deadpool_fail.png';
import Title from 'presentation/components/UI/Typography/Title';
import LoadingIcon from 'presentation/components/UI/LoadingIcon';
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

  if (search.isLoading) {
    return (
      <S.LoadingWrapper>
        <LoadingIcon />
      </S.LoadingWrapper>
    );
  }

  if (!search.characters.length && !search.isLoading) {
    return (
      <S.NotFoundText>
        <img src={FailIcon} alt="Nenhum personagem encontrado!" />
        <Title level={3}>Nenhum personagem encontrado!</Title>
      </S.NotFoundText>
    );
  }

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
