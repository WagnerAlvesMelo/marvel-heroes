import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import Comic from 'domain/models/Comic/Comic';
import Character from 'domain/models/Character/Character';
import MainLayout from 'presentation/layouts/Main';
import useServices from 'presentation/hooks/service/service';
import ComicList from 'presentation/components/Modules/Comic/ComicList';
import CharacterOverview from 'presentation/components/Modules/Character/CharacterOverview';
import CharacterSearchContextProvider from 'presentation/contexts/modules/character/search';
import FavoriteCharacterContextProvider from 'presentation/contexts/modules/character/favorites';

export default function CharacterDetails() {
  const services = useServices();
  const { id } = useParams<{ id: string }>();
  const [character, setCharacter] = useState<Character>();
  const [comics, setComics] = useState<Comic[]>([]);

  const getCharacter = async () => {
    const { results } = await services.characters.getCharacterById(Number(id));
    setCharacter(results);
  };

  const getComics = async () => {
    const { results } = await services.comics.getComicsByCharacterId(Number(id));
    setComics(results);
  };

  useEffect(() => {
    Promise.all([getCharacter(), getComics()]);
  }, []);

  return (
    <CharacterSearchContextProvider>
      <MainLayout headerMode="search">
        <FavoriteCharacterContextProvider>
          <CharacterOverview character={character} />
        </FavoriteCharacterContextProvider>
        <ComicList comics={comics} />
      </MainLayout>
    </CharacterSearchContextProvider>
  );
}
