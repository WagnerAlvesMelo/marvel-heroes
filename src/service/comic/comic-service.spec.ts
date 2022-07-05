import { ApiClientSpy } from 'infra/adapters/api/mocks/api-client-spy';
import ComicService from './comic-service';
import GetComicsByCharacterId from './GetComicsByCharacterId/get-comics-by-character-id';

describe('ComicService', () => {
  it('should access GetCharacters method', () => {
    const mockedFn = jest.fn();
    const apiClientSpy = new ApiClientSpy({ mockFunction: mockedFn });
    const getComicsByCharacterId = new GetComicsByCharacterId(apiClientSpy);

    const charactersService = new ComicService(getComicsByCharacterId);
    charactersService.getComicsByCharacterId(1);

    expect(mockedFn).toHaveBeenCalled();
  });
});
