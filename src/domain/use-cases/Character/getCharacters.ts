import Character from 'domain/models/Character/Character';
import { Pagination } from 'service/protocols/api/protocols/api-client';

export interface GetCharacters {
  execute(params?: GetCharacters.Params): Promise<GetCharacters.Model>;
}

export namespace GetCharacters {
  export type Params = {
    nameStartsWith?: string;
  } & Pagination;

  export type Model = { offset: 0; limit: 20; total: 1562; count: 20; results: Character[] };
}
