import styled from 'styled-components';
import * as Colors from '../../theme/main.colors';

export const StyledButton = styled.a`
  background: ${(props) => (props.reverse ? Colors.primaryColor : 'none')};
  border: 1px solid ${Colors.primaryColor};
  padding: 0.75rem;
  border-radius: 4px;
  font-weight: 700;
  color: ${Colors.textColor};
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    background: ${(props) => (props.reverse ? 'none' : Colors.primaryColor)};
  }

  ${(props) => props.disabled && 'pointer-events: none;'}
`;
