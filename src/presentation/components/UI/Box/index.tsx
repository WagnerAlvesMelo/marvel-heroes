import React, { CSSProperties, PropsWithChildren } from 'react';

import Wrapper from 'presentation/components/UI/Box/styled';

export type BoxProps = {
  alignItems?: CSSProperties['alignItems'];
  justifyContent?: CSSProperties['justifyContent'];
  flexDirection?: CSSProperties['flexDirection'];
  backgroundColor?: string;
  container?: boolean;
} & PropsWithChildren<React.HTMLAttributes<HTMLHeadingElement>>;

export default function Box({
  alignItems,
  justifyContent,
  backgroundColor,
  flexDirection,
  children,
  container,
}: BoxProps) {
  return (
    <Wrapper
      container={container}
      style={{ alignItems, justifyContent, backgroundColor, flexDirection }}
    >
      {children}
    </Wrapper>
  );
}
