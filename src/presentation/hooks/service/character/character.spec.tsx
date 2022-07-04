import makeCharacterService from 'presentation/hooks/service/character/character';
import { ApiClientSpy } from 'infra/adapters/api/mocks/api-client-spy';

describe('CharacterService', () => {
  it('should instantiate a CharacterService class with getCharacters method', () => {
    const mockFn = jest.fn();

    const apiClientSpy = new ApiClientSpy({ mockFunction: mockFn });
    const characterService = makeCharacterService(apiClientSpy);

    characterService.getCharacters();
    expect(mockFn).toHaveBeenCalled();
  });
});
