import Character from 'domain/models/Character/Character';

const characterSearchContextValuesMock = () => ({
  characters: [] as Character[],
  totalCharacters: 0,
  favoritesOnly: false,
  orderByName: 'ASC' as 'ASC' | 'DESC',
  searchQuery: undefined,
  isLoading: false,
  toggleFavoritesOnly: jest.fn(),
  toggleOrderByName: jest.fn(),
  setSearchQuery: jest.fn(),
  searchCharacter: jest.fn(),
});

export default characterSearchContextValuesMock;
