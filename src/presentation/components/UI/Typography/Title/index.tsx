import React, { PropsWithChildren } from 'react';
import { useTheme } from 'styled-components';

type TitleProps = {
  level: 1 | 2 | 3 | 4 | 5 | 6;
} & PropsWithChildren<React.HTMLAttributes<HTMLHeadingElement>>;

export default function Title({ children, level, ...rest }: TitleProps) {
  const theme = useTheme();
  const Heading = `h${level}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

  return (
    <Heading style={{ fontWeight: theme.font.bold }} {...rest}>
      {children}
    </Heading>
  );
}
