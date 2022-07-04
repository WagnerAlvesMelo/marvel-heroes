import IsoDate from 'domain/type-objects/iso-date';
import { ClassType } from 'infra/adapters/class/type-mapper';
import { ClassProps } from 'utils/protocols/types';

export default class ComicDate {
  type!: string;
  @ClassType(() => IsoDate)
  date!: IsoDate;

  constructor(attrs?: ClassProps<ComicDate>) {
    Object.assign(this, attrs);
  }
}
