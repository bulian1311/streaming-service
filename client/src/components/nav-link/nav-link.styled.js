import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  color: var(--text-color);
  font-weight: 700;
  font-size: 1rem;
  line-height: normal;
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }
`;
