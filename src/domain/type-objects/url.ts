import { ClassProps } from 'utils/protocols/types';

type ConstructorType = {
  url: string | URL;
};

export default class Url {
  type?: string;
  url?: URL | string;

  constructor(attrs?: ConstructorType & ClassProps<Url>) {
    Object.assign(this, { ...attrs, url: attrs?.url ? new URL(attrs?.url) : '' });
  }
}
