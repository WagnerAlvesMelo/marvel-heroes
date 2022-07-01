import React, { ReactElement } from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';

import theme from 'presentation/styles/theme';

function customRender(ui: ReactElement) {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
}

export * from '@testing-library/react';
export { customRender as render };
