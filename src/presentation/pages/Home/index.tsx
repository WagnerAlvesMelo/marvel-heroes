import React, { useEffect, useState } from 'react';

import MainLayout from 'presentation/layouts/Main';
import CharacterList from 'presentation/components/Modules/Character/CharacterList';
import useServices from 'presentation/hooks/service/service';
import Character from 'domain/models/Character/Character';
import CharacterThumbnail from 'presentation/components/Modules/Character/CharacterThumbnail';

export default function Home() {
  const services = useServices();

  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    try {
      services.characters.getCharacters().then((res) => {
        setCharacters(res.results);
      });
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <MainLayout>
      <CharacterList
        characters={characters.map((character) => (
          <CharacterThumbnail character={character} />
        ))}
      />
    </MainLayout>
  );
}
