import React from 'react';

import { LogoIcon, LogoWrapper } from './';

export const Logo = () => {
  return (
    <LogoWrapper>
      <LogoIcon />
      <span style={{ color: 'var(--text-color)' }}>Streaming</span>Service
    </LogoWrapper>
  );
};
