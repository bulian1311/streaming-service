import styled from "styled-components";

export const StyledButton = styled.a`
  background: ${(props) => (props.primary ? "var(--primary-color)" : "none")};
  border: 1px solid var(--primary-color);
  padding: 0.75rem;
  border-radius: 4px;
  font-weight: 700;
  color: var(--text-color);
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    background: ${(props) => (props.primary ? "none" : "var(--primary-color)")};
  }

  ${(props) => props.disabled && "pointer-events: none;"}
`;
