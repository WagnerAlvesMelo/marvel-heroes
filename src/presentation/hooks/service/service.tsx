import React from 'react';
import makeCharacterService from 'presentation/hooks/service/contexts/character';
import makeApiClient from 'main/decorators/make-api-client/make-api-client';

const apiClient = makeApiClient();
const context = React.createContext({
  characters: makeCharacterService(apiClient),
});

const useServices = () => React.useContext(context);

export default useServices;
