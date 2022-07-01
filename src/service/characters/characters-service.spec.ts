import CharactersService from 'service/characters/characters-service';
import GetCharacters from 'service/characters/GetCharacters/get-characters';
import { ApiClientSpy } from 'infra/adapters/api/mocks/api-client-spy';

describe('CharactersService', () => {
  it('should access GetCharacters method', () => {
    const mockedFn = jest.fn();
    const apiClientSpy = new ApiClientSpy({ mockFunction: mockedFn });
    const getCharacters = new GetCharacters(apiClientSpy);

    const charactersService = new CharactersService(getCharacters);
    charactersService.getCharacters();

    expect(mockedFn).toHaveBeenCalled();
  });
});
