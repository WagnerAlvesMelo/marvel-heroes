import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from 'presentation/pages/Home';
import CharacterDetails from 'presentation/pages/Character/CharacterDetails';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="character/:id" element={<CharacterDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
