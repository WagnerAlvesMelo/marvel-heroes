import makeCharacterMock from 'domain/models/Character/mocks/Character';

const MockServices = () => ({
  characters: {
    getCharacterById: jest.fn().mockReturnValue(
      Promise.resolve({
        results: makeCharacterMock(),
      }),
    ),
  },
  comics: {
    getComicsByCharacterId: jest.fn().mockReturnValue(Promise.resolve({ results: [] })),
  },
});

export default MockServices;
