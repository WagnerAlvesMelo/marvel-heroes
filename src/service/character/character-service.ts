import { GetCharacters } from 'domain/use-cases/Character/getCharacters';
import { GetCharacterById } from 'domain/use-cases/Character/getCharacterById';

export default class CharacterService {
  constructor(
    private readonly getCharactersService: GetCharacters,
    private readonly getCharacterByIdService: GetCharacterById,
  ) {}

  getCharacters(params?: GetCharacters.Params): Promise<GetCharacters.Model> {
    return this.getCharactersService.execute(params);
  }

  getCharacterById(params: GetCharacterById.Params): Promise<GetCharacterById.Model> {
    return this.getCharacterByIdService.execute(params);
  }
}
