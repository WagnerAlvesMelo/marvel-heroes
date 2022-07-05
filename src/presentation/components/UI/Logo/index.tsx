import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as BigLogo } from 'assets/logo.svg';
import { ReactComponent as SmallLogo } from 'assets/logo_menor.svg';

type Props = {
  size?: 'large' | 'default';
};

export default function Logo({ size = 'default' }: Props) {
  return (
    <Link to="/">
      {size === 'large' ? (
        <BigLogo data-testid="big-logo" />
      ) : (
        <SmallLogo data-testid="small-logo" />
      )}
    </Link>
  );
}
