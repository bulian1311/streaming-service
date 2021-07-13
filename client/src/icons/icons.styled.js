import styled, {css} from 'styled-components';

import { ReactComponent as LeftSvg } from './left.svg'
import { ReactComponent as RightSvg } from './right.svg'

const mixin = css`
  width: 1rem;
  height: 1rem;
  fill: var(--text-color);
`

export const LeftArrow = styled(LeftSvg)`
  ${mixin}
`;

export const RightArrow = styled(RightSvg)`
  ${mixin}
`;