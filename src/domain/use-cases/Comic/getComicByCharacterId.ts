import Comic from 'domain/models/Comic/Comic';

export interface GetComicsByCharacterId {
  execute(id: GetComicsByCharacterId.Params): Promise<GetComicsByCharacterId.Model>;
}

export namespace GetComicsByCharacterId {
  export type Params = number;

  export type Model = { results: Comic[] };
}
