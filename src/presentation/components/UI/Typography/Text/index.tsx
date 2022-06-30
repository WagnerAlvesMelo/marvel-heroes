import React, { CSSProperties } from 'react';

type Props<T extends React.ElementType> = React.PropsWithChildren<{
  as: T;
  align?: CSSProperties['textAlign'];
}>;

export default function Text<T extends React.ElementType>({ as, children, align }: Props<T>) {
  const Component: React.ElementType = as || 'span';

  return <Component style={{ textAlign: align }}>{children}</Component>;
}
