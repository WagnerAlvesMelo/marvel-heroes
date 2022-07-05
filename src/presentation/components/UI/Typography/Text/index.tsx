import React, { CSSProperties } from 'react';
import { DefaultTheme, useTheme } from 'styled-components';

type Props<T extends React.ElementType> = React.PropsWithChildren<{
  as: T;
  align?: CSSProperties['textAlign'];
  color?: keyof DefaultTheme['colors'];
  weight?: 'bold' | 'normal';
}>;

export default function Text<T extends React.ElementType>({
  as,
  children,
  align,
  color,
  weight,
}: Props<T>) {
  const theme = useTheme();
  const Component: React.ElementType = as;

  return (
    <Component
      style={{ textAlign: align, color: theme.colors[color || 'text'], fontWeight: weight }}
    >
      {children}
    </Component>
  );
}
