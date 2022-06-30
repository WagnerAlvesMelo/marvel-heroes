import React from 'react';
import CharacterService from 'presentation/hooks/service/contexts/character';

const context = React.createContext({
  characters: CharacterService(),
});

const useServices = () => React.useContext(context);

export default useServices;
