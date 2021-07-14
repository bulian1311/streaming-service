import React from "react";

import { SearchIcon } from "../../icons";
import { StyledContainer, StyledInput } from "./search.styled";

export const Search = () => {
  return (
    <StyledContainer>
      <StyledInput />
      <SearchIcon
        style={{ position: "absolute", top: "0.6rem", left: "0.6rem" }}
      />
    </StyledContainer>
  );
};
