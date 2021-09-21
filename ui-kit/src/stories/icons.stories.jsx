import React from 'react';
import { storiesOf } from '@storybook/react';

import {
  LeftArrowIcon,
  RightArrowIcon,
  CancelIcon,
  FullScreenIcon,
  HomeIcon,
  LoadingIcon,
  LoginIcon,
  LogoutIcon,
  MuteIcon,
  SearchIcon,
  SettingsIcon,
  SmileIcon,
  UsersIcon,
  VolumeIcon,
} from '../icons';

const stories = storiesOf('Icons', module);

stories.add('cancel icon', () => {
  return <CancelIcon width="30px" height="30px" fill="black" />;
});

stories.add('full screen icon', () => {
  return <FullScreenIcon width="30px" height="30px" fill="black" />;
});

stories.add('home icon', () => {
  return <HomeIcon width="30px" height="30px" fill="black" />;
});

stories.add('left arrow icon', () => {
  return <LeftArrowIcon width="30px" height="30px" fill="black" />;
});

stories.add('right arrow icon', () => {
  return <RightArrowIcon width="30px" height="30px" fill="black" />;
});

stories.add('loading icon', () => {
  return <LoadingIcon width="30px" height="30px" fill="black" />;
});

stories.add('login icon', () => {
  return <LoginIcon width="30px" height="30px" fill="black" />;
});

stories.add('logout icon', () => {
  return <LogoutIcon width="30px" height="30px" fill="black" />;
});

stories.add('volume icon', () => {
  return <VolumeIcon width="30px" height="30px" fill="black" />;
});

stories.add('mute icon', () => {
  return <MuteIcon width="30px" height="30px" fill="black" />;
});

stories.add('search icon', () => {
  return <SearchIcon width="30px" height="30px" fill="black" />;
});

stories.add('settings icon', () => {
  return <SettingsIcon width="30px" height="30px" fill="black" />;
});

stories.add('smile icon', () => {
  return <SmileIcon width="30px" height="30px" fill="black" />;
});

stories.add('users icon', () => {
  return <UsersIcon width="30px" height="30px" fill="black" />;
});
