import React from 'react';

import { Input, Icons } from 'bulian-ui';
import { StyledContainer } from './search.styled';

export const Search = () => {
  return (
    <StyledContainer title="искать">
      <Input style={{ padding: '0.5rem 2rem' }} />
      <Icons.SearchIcon
        style={{ position: 'absolute', top: '0.6rem', left: '0.6rem' }}
      />
    </StyledContainer>
  );
};
