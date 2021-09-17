import React from 'react';

import { Input } from '../../components';
import { SearchIcon } from '../../icons';
import { StyledContainer } from './search.styled';

export const Search = () => {
  return (
    <StyledContainer title="искать">
      <Input style={{ padding: '0.5rem 2rem' }} />
      <SearchIcon
        style={{ position: 'absolute', top: '0.6rem', left: '0.6rem' }}
      />
    </StyledContainer>
  );
};
