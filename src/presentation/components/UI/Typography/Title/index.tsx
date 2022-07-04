import React, { PropsWithChildren } from 'react';

type TitleProps = {
  level: 1 | 2 | 3 | 4 | 5 | 6;
} & PropsWithChildren<React.HTMLAttributes<HTMLHeadingElement>>;

export default function Title({ children, level, ...rest }: TitleProps) {
  const Heading = `h${level}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

  return <Heading {...rest}>{children}</Heading>;
}
