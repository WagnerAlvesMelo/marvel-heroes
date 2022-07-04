import Character from 'domain/models/Character/Character';

export interface GetCharacterById {
  execute(id?: GetCharacterById.Params): Promise<GetCharacterById.Model>;
}

export namespace GetCharacterById {
  export type Params = number;

  export type Model = { results: Character };
}
