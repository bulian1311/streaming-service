import React from "react";

import { Button, Search, NavLink, Logo } from "../../components";

import { Container, Left, Mid, Right } from "./";

export const Navbar = () => {
  return (
    <Container>
      <Left>
        <Logo />
        <NavLink to="/" style={{ marginRight: 10 }}>
          Ссылка раз
        </NavLink>
        <NavLink to="/">Ссылка два</NavLink>
      </Left>
      <Mid>
        <Search />
      </Mid>
      <Right>
        <Button primary style={{ marginRight: 20 }}>
          Регистрация
        </Button>
        <NavLink to="/">Войти</NavLink>
      </Right>
    </Container>
  );
};
