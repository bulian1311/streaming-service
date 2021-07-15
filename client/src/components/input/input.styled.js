import styled from "styled-components";

export const StyledInput = styled.input`
  padding: 0.4rem 0.5rem;
  background-color: var(--bg-color);
  border: 1px solid var(--secondary-color);
  border-radius: 4px;
  color: var(--text-color);

  :focus {
    border: 1px solid var(--primary-color);
  }
`;
