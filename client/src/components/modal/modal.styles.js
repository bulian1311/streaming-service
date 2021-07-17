import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: black;
  background: rgba(0, 0, 0, 0.5);

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalBody = styled.div`
  padding: 1.5rem;
  color: var(--text-color);
  background-color: var(--secondary-color);
  border-radius: 4px;
  position: relative;
`;
