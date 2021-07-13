import styled from "styled-components";

export const StyledButton = styled.a`
  background: ${(props) =>
    props.primary
      ? "linear-gradient(134deg, #944fff 0, #af00ed 100%)"
      : "none"};
  border: ${(props) =>
    props.primary ? "none" : "1px solid var(--text-color)"};
  padding: ${(props) => (props.primary ? "0.75rem" : "0.688rem")};
  border-radius: 4px;
  font-weight: 700;
  color: var(--text-color);
  cursor: pointer;
  font-size: 0.875rem;

  :hover {
    background: ${(props) =>
      props.primary
        ? "linear-gradient(134deg, #af00ed 0, #944fff 100%)"
        : "none"};
    border: ${(props) => (props.primary ? "none" : "1px solid #944fff")};
  }
`;
