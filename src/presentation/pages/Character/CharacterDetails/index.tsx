import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';

import Comic from 'domain/models/Comic/Comic';
import Character from 'domain/models/Character/Character';
import MainLayout from 'presentation/layouts/Main';
import useServices from 'presentation/hooks/service/service';
import ComicList from 'presentation/components/Modules/Comic/ComicList';
import CharacterOverview from 'presentation/components/Modules/Character/CharacterOverview';
import Logo from 'presentation/components/UI/Logo';
import SearchBar from 'presentation/components/UI/SearchBar';
import { CharacterSearchContext } from 'presentation/contexts/modules/character/search';
import LoadingIcon from 'presentation/components/UI/LoadingIcon';
import * as S from './styled';

export default function CharacterDetails() {
  const services = useServices();
  const navigate = useNavigate();
  const { setSearchQuery } = useContext(CharacterSearchContext);
  const { id } = useParams<{ id: string }>();
  const [character, setCharacter] = useState<Character>();
  const [comics, setComics] = useState<Comic[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getCharacter = async () => {
    const { results } = await services.characters.getCharacterById(Number(id));
    setCharacter(results);
  };

  const getComics = async () => {
    const { results } = await services.comics.getComicsByCharacterId(Number(id));
    setComics(results);
    setIsLoading(false);
  };

  const latestComic = comics?.[0]?.dates.find((date) => date.type === 'onsaleDate');

  const handleSubmit = (value: string) => {
    setSearchQuery(value);
    navigate('/home');
  };

  useEffect(() => {
    Promise.all([getCharacter(), getComics()]);
  }, []);

  return (
    <MainLayout>
      <S.Header>
        <Logo size="default" />
        <SearchBar onSubmit={handleSubmit} />
      </S.Header>
      {isLoading ? (
        <S.LoadingWrapper>
          <LoadingIcon />
        </S.LoadingWrapper>
      ) : (
        <>
          <CharacterOverview
            lastComic={latestComic?.date.toLocaleDateString()}
            character={character}
          />
          <ComicList comics={comics} />
        </>
      )}
    </MainLayout>
  );
}
