import ComicService from 'service/comic/comic-service';
import { ApiClient } from 'infra/adapters/api/protocols/api-client';
import GetComicsByCharacterId from 'service/comic/GetComicsByCharacterId/get-comics-by-character-id';

export default function makeComicService(apiClient: ApiClient) {
  const getComics = new GetComicsByCharacterId(apiClient);

  return new ComicService(getComics);
}
