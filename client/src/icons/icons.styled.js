import styled, { css } from "styled-components";

import { ReactComponent as LeftSvg } from "./left.svg";
import { ReactComponent as RightSvg } from "./right.svg";
import { ReactComponent as UsersSvg } from "./users.svg";
import { ReactComponent as SmileSvg } from "./smile.svg";
import { ReactComponent as SearchSvg } from "./search.svg";
import { ReactComponent as HomeSvg } from "./home.svg";
import { ReactComponent as CancelSvg } from "./cancel.svg";

const mixin = css`
  width: 1rem;
  height: 1rem;
  fill: var(--text-color);
`;

export const LeftArrowIcon = styled(LeftSvg)`
  ${mixin}
`;

export const RightArrowIcon = styled(RightSvg)`
  ${mixin}
`;

export const UsersIcon = styled(UsersSvg)`
  ${mixin}
`;

export const SmileIcon = styled(SmileSvg)`
  ${mixin}
`;

export const SearchIcon = styled(SearchSvg)`
  ${mixin}
`;

export const HomeIcon = styled(HomeSvg)`
  ${mixin}
`;

export const CancelIcon = styled(CancelSvg)`
  ${mixin}
`;
