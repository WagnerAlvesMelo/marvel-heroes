import Character from 'domain/models/Character/Character';

const favoriteContextValuesMock = () => ({
  favorites: [] as Character[],
  addFavorite: jest.fn(),
  removeFavorite: jest.fn(),
});

export default favoriteContextValuesMock;
