import styled from 'styled-components';
import { Colors } from 'bulian-ui';
import { ReactComponent as Icon } from './video.svg';

export const LogoWrapper = styled.span`
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 1.5rem;
  color: ${Colors.primaryColor};
  margin-right: 1rem;
`;

export const LogoIcon = styled(Icon)`
  fill: ${Colors.primaryColor};
  width: 50px;
  height: 50px;
  margin-right: 0.5rem;
`;
