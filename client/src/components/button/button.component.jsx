import React from "react";

import { StyledButton } from "./";

export const Button = ({ children, primary, style }) => {
  return (
    <StyledButton style={style} primary={primary}>
      {children}
    </StyledButton>
  );
};
