import { ApiClientSpy } from 'infra/adapters/api/mocks/api-client-spy';
import makeComicService from './comic';

describe('ComicService', () => {
  it('should instantiate a ComicService class with getComicByCharacterId method', () => {
    const mockFn = jest.fn();

    const apiClientSpy = new ApiClientSpy({ mockFunction: mockFn });
    const characterService = makeComicService(apiClientSpy);

    characterService.getComicsByCharacterId(1);
    expect(mockFn).toHaveBeenCalled();
  });
});
