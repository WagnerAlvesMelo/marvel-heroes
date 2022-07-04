import React from 'react';

import MainLayout from 'presentation/layouts/Main';
import CharacterList from 'presentation/components/Modules/Character/CharacterList';
import CharacterSearchContextProvider from 'presentation/contexts/modules/character/search';

export default function Home() {
  return (
    <CharacterSearchContextProvider>
      <MainLayout headerMode="full">
        <CharacterList />
      </MainLayout>
    </CharacterSearchContextProvider>
  );
}
