import { ClassProps } from 'utils/types';

type ConstructorType = {
  url: string | URL;
};

export default class Url {
  type?: string;
  url?: URL;

  constructor(attrs?: ConstructorType & ClassProps<Url>) {
    Object.assign(this, { ...attrs, url: attrs?.url ? new URL(attrs?.url) : '' });
  }
}
