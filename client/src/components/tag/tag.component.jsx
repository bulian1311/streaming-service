import React from 'react';

import { Container } from './tag.styled';

export const Tag = ({ children, isActive, ...otherProps }) => {
  return <Container isActive={isActive} {...otherProps}>{children}</Container>;
};
