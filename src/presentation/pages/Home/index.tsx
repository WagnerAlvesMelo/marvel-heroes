import React, { useContext, useEffect } from 'react';
import { useDebouncedCallback } from 'use-debounce';

import MainLayout from 'presentation/layouts/Main';
import CharacterList from 'presentation/components/Modules/Character/CharacterList';
import Logo from 'presentation/components/UI/Logo';
import SearchBar from 'presentation/components/UI/SearchBar';
import Title from 'presentation/components/UI/Typography/Title';
import Text from 'presentation/components/UI/Typography/Text';
import { CharacterSearchContext } from 'presentation/contexts/modules/character/search';
import * as S from './styled';

export default function Home() {
  const { searchCharacter, setSearchQuery, searchQuery } = useContext(CharacterSearchContext);

  const debouncedSearchQuery = useDebouncedCallback((value: string) => {
    setSearchQuery(value);
  }, 500);

  useEffect(() => {
    searchCharacter(0);
  }, [searchQuery]);

  return (
    <MainLayout>
      <S.Header>
        <Logo size="large" />
        <Title level={1}>EXPLORE O UNIVERSO</Title>
        <Text align="center" as="p">
          Mergulhe no domínio deslumbrante de todos os personagens clássicos que você ama - e
          aqueles que você descobrirá em breve
        </Text>
        <SearchBar onChange={debouncedSearchQuery} defaultValue={searchQuery} />
      </S.Header>
      <CharacterList />
    </MainLayout>
  );
}
