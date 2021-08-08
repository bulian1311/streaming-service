import React, { useState } from 'react';

import { Tag } from '../';
import { VolumeIcon, MuteIcon, FullScreenIcon } from '../../icons';
import { StyledControls, StyledRange } from './hls-player-controls.styled';

export const HlsPlayerControls = ({
  handleMute,
  handleVolume,
  handleFullScreen,
}) => {
  const [isMute, setIsMute] = useState(true);
  const [volume, setVolume] = useState(0);

  const handleMuteIcon = () => {
    handleMute();
    setIsMute(!isMute);
  };

  const handleVolumeRange = (e) => {
    if (Number(e.target.value) === 0) {
      setIsMute(true);
    } else {
      setIsMute(false);
    }
    setVolume(e.target.value);
    handleVolume(e.target.value);
  };

  return (
    <StyledControls>
      <Tag>
        <StyledRange
          min={0}
          max={1}
          step={0.05}
          onChange={handleVolumeRange}
          value={volume}
          type="range"
        />
      </Tag>
      <Tag onClick={handleMuteIcon} style={{ margin: '0 1rem' }}>
        {isMute ? <MuteIcon /> : <VolumeIcon />}
      </Tag>
      <Tag>
        <FullScreenIcon onClick={handleFullScreen} />
      </Tag>
    </StyledControls>
  );
};
