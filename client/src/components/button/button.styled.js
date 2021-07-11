import styled from "styled-components";

export const StyledButton = styled.button`
  background: linear-gradient(134deg, #944fff 0, #af00ed 100%);
  padding: 0.75rem;
  border-radius: 2px;
  font-weight: 700;
  color: var(--text-color);
  cursor: pointer;
  font-size: 0.875rem;

  :hover {
    background: linear-gradient(134deg, #af00ed 0, #944fff 100%);
  }
`;
