import React from 'react';

import MainLayout from 'presentation/layouts/Main';
import CharacterList from 'presentation/components/Modules/Character/CharacterList';
import CharacterSearchContextProvider from 'presentation/contexts/modules/character/search';
import FavoriteCharacterContextProvider from 'presentation/contexts/modules/character/favorites';

export default function Home() {
  return (
    <FavoriteCharacterContextProvider>
      <CharacterSearchContextProvider>
        <MainLayout headerMode="full">
          <CharacterList />
        </MainLayout>
      </CharacterSearchContextProvider>
    </FavoriteCharacterContextProvider>
  );
}
