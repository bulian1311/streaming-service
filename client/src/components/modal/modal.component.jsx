import React from "react";

import { Container, ModalBody } from "./modal.styles";

export const Modal = ({ children, isVisible, ...otherProps }) => {
  if (!isVisible) return "";

  return (
    <Container {...otherProps}>
      <ModalBody>{children}</ModalBody>
    </Container>
  );
};
