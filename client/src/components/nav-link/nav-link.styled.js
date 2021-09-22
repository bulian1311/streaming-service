import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Colors } from 'bulian-ui';

export const StyledLink = styled(Link)`
  color: ${Colors.textColor};
  font-weight: 700;
  font-size: 1rem;
  line-height: normal;
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }
`;
