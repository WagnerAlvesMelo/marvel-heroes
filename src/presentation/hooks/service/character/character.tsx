import CharactersService from 'service/character/character-service';
import GetCharacters from 'service/character/GetCharacters/get-characters';
import { ApiClient } from 'service/protocols/api/protocols/api-client';
import GetCharacterById from 'service/character/GetCharacterById/get-character-by-id';

export default function makeCharacterService(apiClient: ApiClient) {
  const getCharacters = new GetCharacters(apiClient);
  const getCharacterById = new GetCharacterById(apiClient);

  return new CharactersService(getCharacters, getCharacterById);
}
