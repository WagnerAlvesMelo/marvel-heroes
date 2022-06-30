import { ClassProps } from 'utils/types';

export default class Thumbnail {
  path?: string;
  extension?: string;

  get mountedThumbnail() {
    if (this.path && this.extension) {
      return `${this.path}.${this.extension}`;
    }
    return '';
  }

  constructor(attrs?: ClassProps<Thumbnail>) {
    Object.assign(this, attrs);
  }
}
