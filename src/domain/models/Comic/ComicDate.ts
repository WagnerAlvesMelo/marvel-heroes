import IsoDate from 'domain/type-objects/iso-date';
import { ClassType } from 'infra/adapters/class/type-mapper';
import { ClassProps } from 'utils/protocols/types';
import { Transform } from 'class-transformer';

export default class ComicDate {
  type!: string;
  @ClassType(() => String)
  @Transform(({ value }) => new IsoDate(value))
  date!: IsoDate;

  constructor(attrs?: ClassProps<ComicDate>) {
    Object.assign(this, attrs);
  }
}
