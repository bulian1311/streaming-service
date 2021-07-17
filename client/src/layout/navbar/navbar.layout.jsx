import React from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "../../hooks";

import { Button, Search, NavLink, Logo } from "../../components";

import { Container, Left, Mid, Right } from "./";

export const Navbar = observer(() => {
  const { userStore } = useStore();

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
        <Button onClick={() => userStore.setIsFormVisible(true)} primary>
          Авторизация
        </Button>
      </Right>
    </Container>
  );
});
