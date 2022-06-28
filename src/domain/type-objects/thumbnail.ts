import { ClassProps } from 'utils/types';

export default class Thumbnail {
  path!: string;
  extension!: string;

  get mountedThumbnail() {
    return this.path + this.extension;
  }

  constructor({ ...attrs }: ClassProps<Thumbnail>) {
    Object.assign(attrs);
  }
}
