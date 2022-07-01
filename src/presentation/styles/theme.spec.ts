import theme from './theme';

describe('Theme', () => {
  it('should exists with correct values', () => {
    const sut = theme;
    expect(theme.font.family).toBeTruthy();
  });
});
