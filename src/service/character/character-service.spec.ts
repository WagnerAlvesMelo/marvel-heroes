import CharactersService from 'service/character/character-service';
import GetCharacters from 'service/character/GetCharacters/get-characters';
import { ApiClientSpy } from 'infra/adapters/api/mocks/api-client-spy';
import GetCharacterById from 'service/character/GetCharacterById/get-character-by-id';

describe('CharactersService', () => {
  it('should access GetCharacters method', () => {
    const mockedFn = jest.fn();
    const apiClientSpy = new ApiClientSpy({ mockFunction: mockedFn });
    const getCharacters = new GetCharacters(apiClientSpy);
    const getCharacterById = new GetCharacterById(apiClientSpy);

    const charactersService = new CharactersService(getCharacters, getCharacterById);
    charactersService.getCharacters();

    expect(mockedFn).toHaveBeenCalled();
  });
});
