import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: black;
  opacity: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalBody = styled.div`
  padding: 1rem;
  background-color: var(--secondary-color);
  border-radius: 4px;
`;
