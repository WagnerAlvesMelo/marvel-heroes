import React from 'react';

type Props<T extends React.ElementType> = React.PropsWithChildren<{ as: T }>;

export default function Text<T extends React.ElementType>({ as, children }: Props<T>) {
  const Component: React.ElementType = as || 'span';

  return <Component>{children}</Component>;
}
