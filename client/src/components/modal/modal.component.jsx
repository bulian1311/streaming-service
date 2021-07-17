import React from "react";

import { Tag } from "../../components";
import { CancelIcon } from "../../icons";
import { Container, ModalBody } from "./modal.styles";

export const Modal = ({ children, isVisible, setIsVisible, ...otherProps }) => {
  if (!isVisible) return "";

  return (
    <Container {...otherProps}>
      <ModalBody>
        <Tag
          onClick={() => setIsVisible(false)}
          style={{ position: "absolute", top: 5, right: 5 }}
        >
          <CancelIcon />
        </Tag>
        {children}
      </ModalBody>
    </Container>
  );
};
