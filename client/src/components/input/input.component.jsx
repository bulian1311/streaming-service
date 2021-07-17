import React from "react";

import { StyledInput, StyledLabel, InputGroup } from "./input.styled";

export const Input = ({ label, ...otherProps }) => {
  return (
    <InputGroup>
      {label && <StyledLabel>{label}</StyledLabel>}
      <StyledInput {...otherProps} />
    </InputGroup>
  );
};
