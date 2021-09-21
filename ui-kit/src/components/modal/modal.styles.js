import styled from 'styled-components';

import { textColor, secondaryColor } from '../../theme/main.colors';

export const ModalContainer = styled.div`
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
  color: ${textColor};
  background-color: ${secondaryColor};
  border-radius: 4px;
  position: relative;
`;
