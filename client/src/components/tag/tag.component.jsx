import React from 'react';

import { Container } from './tag.styled';

export const Tag = ({ children, ...otherProps }) => {
  return <Container {...otherProps}>{children}</Container>;
};
