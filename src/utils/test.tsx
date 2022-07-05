import React, { ReactElement } from 'react';
import { ThemeProvider } from 'styled-components';
import { render, RenderOptions } from '@testing-library/react';

import theme from 'presentation/styles/theme';
import { ToastContainer } from 'react-toastify';

function customRender(ui: ReactElement, config?: RenderOptions) {
  return render(
    <ThemeProvider theme={theme}>
      {ui}
      <ToastContainer />
    </ThemeProvider>,
    config,
  );
}

export * from '@testing-library/react';
export { customRender as render };
