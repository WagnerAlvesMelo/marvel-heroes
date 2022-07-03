import React from 'react';
import ReactDOM from 'react-dom/client';
import 'reflect-metadata';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from 'presentation/styles/global';
import Theme from 'presentation/styles/theme';
import Router from 'main/router';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Router />
    </ThemeProvider>
  </React.StrictMode>,
);
