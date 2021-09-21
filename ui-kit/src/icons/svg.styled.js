import styled from 'styled-components';
import { textColor } from '../theme/colors';

const SvgAttrs = styled.svg.attrs({ 
  version: '1.1', 
  xmlns: 'http://www.w3.org/2000/svg', 
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
})``;

export const StyledSvg = styled(SvgAttrs)` 
  width: ${props => props.width ? props.width : "1rem"}; 
  height: ${props => props.height ? props.height : "1rem"};
  fill: ${props => props.fill ? props.fill : textColor};
`