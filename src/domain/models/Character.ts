import Resource from 'domain/type-objects/resource';
import Url from 'domain/type-objects/url';
import Thumbnail from 'domain/type-objects/thumbnail';
import { ClassType } from 'infra/adapters/class/type-mapper';
import { ClassProps } from 'utils/types';

type CharacterAttachment = {
  available: number;
  collectionURI: string;
  items: Resource[];
  returned: number;
};

export default class Character {
  id!: number;
  name!: string;
  description!: string;
  modified!: string;
  resourceURI!: string;
  comics!: CharacterAttachment;
  series!: CharacterAttachment;
  stories!: CharacterAttachment;
  events!: CharacterAttachment;
  @ClassType(() => Url)
  urls!: Array<Url>;
  @ClassType(() => Thumbnail)
  thumbnail!: Thumbnail;

  constructor(attrs: ClassProps<Character>) {
    Object.assign(this, attrs);
  }
}
