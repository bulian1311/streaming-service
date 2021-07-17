import React from "react";

import { LoadingIcon } from "../../icons";
import { StyledButton } from "./";

export const Button = ({ children, primary, isLoading, ...props }) => {
  return (
    <StyledButton primary={primary} {...props}>
      {isLoading ? <LoadingIcon /> : children}
    </StyledButton>
  );
};
