import React from 'react';
import makeCharacterService from 'presentation/hooks/service/character/character';
import makeApiClient from 'main/decorators/make-api-client/make-api-client';
import makeComicService from './comic/comic';

const apiClient = makeApiClient();
const context = React.createContext({
  characters: makeCharacterService(apiClient),
  comics: makeComicService(apiClient),
});

const useServices = () => React.useContext(context);

export default useServices;
