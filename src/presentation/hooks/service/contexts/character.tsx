import React from 'react';

import makeApiClient from 'main/decorators/make-api-client/make-api-client';
import CharactersService from 'service/characters/characters-service';
import GetCharacters from 'service/characters/GetCharacters/get-characters';

export default function CharacterService() {
  const apiClient = makeApiClient();

  const getCharacters = new GetCharacters(apiClient);

  return new CharactersService(getCharacters);
}
