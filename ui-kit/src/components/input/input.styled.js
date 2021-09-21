import styled from 'styled-components';

import * as Colors from '../../theme/main.colors';

export const StyledInput = styled.input`
  width: 100%;
  padding: 0.4rem 0.5rem;
  background-color: ${Colors.bgColor};
  border: 1px solid ${Colors.secondaryColor};
  border-radius: 4px;
  color: ${Colors.textColor};

  :focus {
    border: 1px solid ${Colors.primaryColor};
  }
`;

export const InputGroup = styled.div`
  width: 100%;
`;

export const StyledLabel = styled.label`
  color: ${Colors.textColor};
  display: inline-block;
  margin: 0.4rem 0;
`;
