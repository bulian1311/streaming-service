import React from 'react';
import { StyledLink } from './nav-link.styled';

export const NavLink = ({ children, ...otherProps }) => {
  return <StyledLink {...otherProps}>{children}</StyledLink>;
};
