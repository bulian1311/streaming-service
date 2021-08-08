import styled, { css } from 'styled-components';

import { ReactComponent as LeftSvg } from './left.svg';
import { ReactComponent as RightSvg } from './right.svg';
import { ReactComponent as UsersSvg } from './users.svg';
import { ReactComponent as SmileSvg } from './smile.svg';
import { ReactComponent as SearchSvg } from './search.svg';
import { ReactComponent as HomeSvg } from './home.svg';
import { ReactComponent as CancelSvg } from './cancel.svg';
import { ReactComponent as LoadingSvg } from './loading.svg';
import { ReactComponent as SettingsSvg } from './settings.svg';
import { ReactComponent as LogoutSvg } from './logout.svg';
import { ReactComponent as LoginSvg } from './login.svg';
import { ReactComponent as VolumeSvg } from './volume.svg';
import { ReactComponent as MuteSvg } from './mute.svg';
import { ReactComponent as FullScreenSvg } from './full-screen.svg';

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

export const LoadingIcon = styled(LoadingSvg)`
  ${mixin}
`;

export const SettingsIcon = styled(SettingsSvg)`
  ${mixin}
`;

export const LogoutIcon = styled(LogoutSvg)`
  ${mixin}
`;

export const LoginIcon = styled(LoginSvg)`
  ${mixin}
`;

export const VolumeIcon = styled(VolumeSvg)`
  ${mixin}
`;

export const MuteIcon = styled(MuteSvg)`
  ${mixin}
`;

export const FullScreenIcon = styled(FullScreenSvg)`
  ${mixin}
`;
