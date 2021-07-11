import React from "react";
import { Container, Left, Mid, Right } from "./";

import { Button } from "../../components/button";

export const Navbar = () => {
  return (
    <Container>
      <Left>left</Left>
      <Mid>mid</Mid>
      <Right>
        <Button>Регистрация</Button>
      </Right>
    </Container>
  );
};
