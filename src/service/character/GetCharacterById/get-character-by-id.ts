import { ApiClient } from 'service/protocols/api/protocols/api-client';
import { plainToClassInstance } from 'infra/adapters/class/type-mapper';
import Character from 'domain/models/Character/Character';
import { GetCharacterById as IGetCharacterById } from 'domain/use-cases/Character/getCharacterById';

export default class GetCharacterById implements IGetCharacterById {
  constructor(private readonly apiClient: ApiClient) {}

  async execute(params?: IGetCharacterById.Params): Promise<IGetCharacterById.Model> {
    const { data } = await this.apiClient.request({
      method: 'get',
      url: `/characters/${params}`,
    });

    return { ...data, results: plainToClassInstance(Character, data?.results?.[0]) };
  }
}
