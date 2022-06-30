import Character from 'domain/models/Character';
import { Pagination } from 'infra/adapters/api/protocols/api-client';

export interface GetCharacters {
  execute(params?: GetCharacters.Params): Promise<GetCharacters.Model>;
}

export namespace GetCharacters {
  export type Params = {
    name?: string;
  } & Pagination;

  export type Model = { offset: 0; limit: 20; total: 1562; count: 20; results: Character[] };
}
