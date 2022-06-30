import { GetCharacters } from 'service/characters/GetCharacters/protocols/get-characters';

export default class CharactersService {
  constructor(private readonly getCharactersService: GetCharacters) {}

  getCharacters(params?: GetCharacters.Params): Promise<GetCharacters.Model> {
    return this.getCharactersService.execute(params);
  }
}
