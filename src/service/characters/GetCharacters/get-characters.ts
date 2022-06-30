import { ApiClient } from 'infra/adapters/api/protocols/api-client';
import { plainToClassInstance } from 'infra/adapters/class/type-mapper';
import Character from 'domain/models/Character';
import { GetCharacters as IGetCharacters } from './protocols/get-characters';

export default class GetCharacters {
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
