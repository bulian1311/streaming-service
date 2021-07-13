import styled from "styled-components";

export const StyledLink = styled.a`
  color: var(--text-color);
  font-weight: ${(props) => (props.large ? "600" : "400")};
  font-size: 0.875rem;
  line-height: normal;
  cursor: pointer;
  margin-top: ${props => props.large ? "0" : "10px"};

  :hover {
    text-decoration: underline;
  }
`;
