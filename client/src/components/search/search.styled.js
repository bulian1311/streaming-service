import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  align-items: stretch;
  width: 100%;
  position: relative;
`;

export const StyledInput = styled.input`
  padding: 0.5rem 2rem;
  background-color: var(--bg-color);
  border: 1px solid var(--secondary-color);
  border-radius: 4px;
  color: var(--text-color);

  :focus {
    border: 1px solid var(--primary-color);
  }
`;
