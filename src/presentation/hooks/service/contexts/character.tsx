import React from 'react';

import CharactersService from 'service/characters/characters-service';
import GetCharacters from 'service/characters/GetCharacters/get-characters';
import { ApiClient } from 'infra/adapters/api/protocols/api-client';

export default function makeCharacterService(apiClient: ApiClient) {
  const getCharacters = new GetCharacters(apiClient);

  return new CharactersService(getCharacters);
}
