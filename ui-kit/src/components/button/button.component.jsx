import React from 'react';

import { LoadingIcon } from '../../icons';
import { StyledButton } from './button.styled';

export const Button = ({ children, reverse, isLoading, ...props }) => {
  return (
    <StyledButton reverse={reverse} {...props}>
      {isLoading ? <LoadingIcon /> : children}
    </StyledButton>
  );
};
