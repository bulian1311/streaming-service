import React from 'react';

import { Navbar } from './navbar';
import { Sidebar } from './sidebar';
import { Body } from './body';
import { Chat } from './chat';
import { Auth } from './auth';

import { Container } from './layout.styled';

export const Layout = ({ children }) => {
  return (
    <Container>
      <Auth />
      <Navbar />
      <Sidebar />
      <Body>{children}</Body>
      <Chat />
    </Container>
  );
};
