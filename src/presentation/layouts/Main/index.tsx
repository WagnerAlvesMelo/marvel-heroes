import React, { PropsWithChildren } from 'react';

import { ReactComponent as Logo } from 'assets/logo.svg';
import Box from 'presentation/components/UI/Box';
import Title from 'presentation/components/UI/Typography/Title';
import Text from 'presentation/components/UI/Typography/Text';
import SearchBar from 'presentation/components/UI/SearchBar';

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <Box alignItems="center">
      <Logo />
      <Title level={1}>EXPLORE O UNIVERSO</Title>
      <Text align="center" as="p">
        Mergulhe no domínio deslumbrante de todos os personagens clássicos que você ama - e aqueles
        que você descobrirá em breve
      </Text>
      <SearchBar />
      {children}
    </Box>
  );
}
