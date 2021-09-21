import styled from 'styled-components';

import {
  primaryColor,
  secondaryColor,
  textColor,
} from '../../theme/main.colors';

export const Container = styled.div`
  padding: 0.4rem 0.6rem;
  background-color: ${(props) =>
    props.isActive ? primaryColor : secondaryColor};
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${textColor};

  :hover {
    background-color: ${(props) =>
      props.isActive ? secondaryColor : primaryColor};
  }
`;
