import { GetComicsByCharacterId as IGetComicsByCharacterId } from 'domain/use-cases/Comic/getComicByCharacterId';
import Comic from 'domain/models/Comic/Comic';
import { ApiClient } from 'infra/adapters/api/protocols/api-client';
import { plainToClassInstance } from 'infra/adapters/class/type-mapper';

export default class GetComicsByCharacterId implements IGetComicsByCharacterId {
  constructor(private readonly apiClient: ApiClient) {}

  async execute(id: IGetComicsByCharacterId.Params): Promise<IGetComicsByCharacterId.Model> {
    const { data } = await this.apiClient.request({
      method: 'get',
      url: `/characters/${id}/comics`,
      params: {
        orderBy: '-onsaleDate',
      },
    });

    return { ...data, results: plainToClassInstance(Comic, data.results) };
  }
}
