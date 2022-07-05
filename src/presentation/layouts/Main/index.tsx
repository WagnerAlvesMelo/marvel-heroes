import React, { PropsWithChildren } from 'react';
import { useLocation } from 'react-router';
import * as S from './styled';

export type MainLayoutProps = PropsWithChildren;

export default function MainLayout({ children }: MainLayoutProps) {
  const location = useLocation();

  const isCharacterPage = location.pathname.includes('/character');

  return (
    <S.Background bgColor={isCharacterPage ? 'green' : 'white'}>
      <S.Wrapper>{children}</S.Wrapper>
    </S.Background>
  );
}
