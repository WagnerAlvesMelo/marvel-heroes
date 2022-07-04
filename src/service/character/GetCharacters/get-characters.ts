import { ApiClient } from 'infra/adapters/api/protocols/api-client';
import { plainToClassInstance } from 'infra/adapters/class/type-mapper';
import Character from 'domain/models/Character/Character';
import { GetCharacters as IGetCharacters } from 'domain/use-cases/Character/getCharacters';

export default class GetCharacters implements IGetCharacters {
  constructor(private readonly apiClient: ApiClient) {}

  async execute(params?: IGetCharacters.Params): Promise<IGetCharacters.Model> {
    const { data } = await this.apiClient.request({
      method: 'get',
      url: '/characters',
      params: { ...params },
    });

    return { ...data, results: plainToClassInstance(Character, data.results) };
  }
}
