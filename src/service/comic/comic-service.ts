import { GetComicsByCharacterId } from 'domain/use-cases/Comic/getComicByCharacterId';

export default class ComicService {
  constructor(private readonly getComicsByCharacterIdService: GetComicsByCharacterId) {}

  getComicsByCharacterId(
    params: GetComicsByCharacterId.Params,
  ): Promise<GetComicsByCharacterId.Model> {
    return this.getComicsByCharacterIdService.execute(params);
  }
}
