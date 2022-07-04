import Thumbnail from 'domain/type-objects/thumbnail';
import { ClassType } from 'infra/adapters/class/type-mapper';
import { ClassProps } from 'utils/protocols/types';
import ComicDate from './ComicDate';

export default class Comic {
  id!: number;
  digitalId!: number;
  title!: string;
  @ClassType(() => ComicDate)
  dates!: ComicDate[];
  @ClassType(() => Thumbnail)
  thumbnail!: Thumbnail;

  constructor(attrs?: ClassProps<Comic>) {
    Object.assign(this, attrs);
  }
}
