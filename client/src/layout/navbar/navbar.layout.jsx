import React from "react";

import { Button, Search, NavLink, Logo } from "../../components";

import { Container, Left, Mid, Right } from "./";

export const Navbar = () => {
  return (
    <Container>
      <Left>
        <Logo />
        <NavLink large style={{ marginRight: 10 }}>
          Ссылка раз
        </NavLink>
        <NavLink large>Ссылка два</NavLink>
      </Left>
      <Mid>
        <Search />
      </Mid>
      <Right>
        <Button primary style={{ marginRight: 20 }}>
          Регистрация
        </Button>
        <NavLink large>Войти</NavLink>
      </Right>
    </Container>
  );
};
