import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import 'reflect-metadata';
import 'react-toastify/dist/ReactToastify.css';

import GlobalStyles from 'presentation/styles/global';
import Theme from 'presentation/styles/theme';
import Router from 'main/router';
import CharacterSearchContextProvider from 'presentation/contexts/modules/character/search';
import FavoriteCharacterContextProvider from 'presentation/contexts/modules/character/favorites';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <ThemeProvider theme={Theme}>
    <FavoriteCharacterContextProvider>
      <CharacterSearchContextProvider>
        <GlobalStyles />
        <Router />
        <ToastContainer />
      </CharacterSearchContextProvider>
    </FavoriteCharacterContextProvider>
  </ThemeProvider>,
);
