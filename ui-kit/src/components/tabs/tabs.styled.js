import styled from 'styled-components';

import { primaryColor, textColor } from '../../theme/main.colors';

export const Container = styled.div`
  display: flex;
  align-items: stretch;
  font-size: 1rem;
  justify-content: space-between;
  overflow: hidden;
  overflow-x: auto;
  white-space: nowrap;
`;

export const StyledUl = styled.ul`
  display: flex;
  align-items: center;
  border-bottom-color: #dbdbdb;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  flex-grow: 1;
  flex-shrink: 0;
  justify-content: flex-start;
`;

export const StyledLi = styled.li`
  display: block;
`;

export const StyledA = styled.a`
  align-items: center;
  border-bottom-color: ${(props) =>
    props.isActive ? primaryColor : '#dbdbdb'};
  border-bottom-style: solid;
  border-bottom-width: 1px;
  color: ${(props) => (props.isActive ? primaryColor : textColor)};
  display: flex;
  justify-content: center;
  margin-bottom: -1px;
  padding: 0.5em 1em;
  vertical-align: top;
  cursor: pointer;
`;
