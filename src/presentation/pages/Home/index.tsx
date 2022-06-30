import React from 'react';

import MainLayout from 'presentation/layouts/Main';
import CharacterList from 'presentation/components/Modules/Character/CharacterList';

export default function Home() {
  return (
    <MainLayout>
      <CharacterList characters={[]} />
    </MainLayout>
  );
}
