import React, { PropsWithChildren } from 'react';

import Title from 'presentation/components/UI/Typography/Title';
import Text from 'presentation/components/UI/Typography/Text';
import SearchBar from 'presentation/components/UI/SearchBar';
import Logo from 'presentation/components/UI/Logo';
import { useLocation } from 'react-router';
import * as S from './styled';

export type MainLayoutProps = {
  headerMode: 'full' | 'search';
} & PropsWithChildren;

export default function MainLayout({ children, headerMode = 'search' }: MainLayoutProps) {
  const location = useLocation();

  const isCharacterPage = location.pathname.includes('/character');

  return (
    <S.Background bgColor={isCharacterPage ? 'green' : 'white'}>
      <S.Wrapper>
        <S.Header headerMode={headerMode}>
          <Logo size={headerMode === 'full' ? 'large' : 'default'} />
          {headerMode === 'full' && (
            <>
              <Title level={1}>EXPLORE O UNIVERSO</Title>
              <Text align="center" as="p">
                Mergulhe no domínio deslumbrante de todos os personagens clássicos que você ama - e
                aqueles que você descobrirá em breve
              </Text>
            </>
          )}
          <SearchBar />
        </S.Header>
        {children}
      </S.Wrapper>
    </S.Background>
  );
}
