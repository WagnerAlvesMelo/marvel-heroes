import { GetCharacters } from 'domain/use-cases/Character/getCharacters';

export default class CharactersService {
  constructor(private readonly getCharactersService: GetCharacters) {}

  getCharacters(params?: GetCharacters.Params): Promise<GetCharacters.Model> {
    return this.getCharactersService.execute(params);
  }
}
