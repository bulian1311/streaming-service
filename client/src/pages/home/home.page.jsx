import React from 'react';
import { VideoPlayer } from '../../components';

export const HomePage = () => {
  const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: '/videos/output.m3u8',
        type: 'application/x-mpegURL',
      },
    ],
  };

  return (
    <div>
      <p>homepage</p>
      <VideoPlayer options={videoJsOptions} />
      <p>homepage</p>
      <p>homepage</p>
      <p>homepage</p>
      <p>homepage</p>
      <p>homepage</p>
      <p>homepage</p>
      <p>homepage</p>
      <p>homepage</p>
      <p>homepage</p>
      <p>homepage</p>
      <p>homepage</p>
      <p>homepage</p>
      <p>homepage</p>
      <p>homepage</p>
      <p>homepage</p>
      <p>homepage</p>
      <p>homepage</p>
      <p>homepage</p>
      <p>homepage</p>
      <p>homepage</p>
      <p>homepage</p>
      <p>homepage</p>
      <p>homepage</p>
      <p>homepage</p>
      <p>homepage</p>
      <p>homepage</p>
      <p>homepage</p>
      <p>homepage</p>
      <p>homepage</p>
      <p>homepage</p>
      <p>homepage</p>
      <p>homepage</p>
      <p>homepage</p>
      <p>homepage</p>
      <p>homepage</p>
      <p>homepage</p>
      <p>homepage</p>
      <p>homepage</p>
      <p>homepage</p>
      <p>homepage</p>
      <p>homepage</p>
      <p>homepage</p>
      <p>homepage</p>
      <p>homepage</p>
      <p>homepage</p>
      <p>homepage</p>
      <p>homepage</p>
      <p>homepage</p>
      <p>homepage</p>
      <p>homepage</p>
      <p>homepage</p>
      <p>homepage</p>
      <p>homepage</p>
      <p>homepage</p>
      <p>homepage</p>
      <p>homepage</p>
      <p>homepage</p>
      <p>homepage</p>
      <p>homepage</p>
      <p>homepage</p>
      <p>homepage</p>
      <p>homepage</p>
      <p>homepage</p>
      <p>homepage</p>
      <p>homepage</p>
      <p>homepage</p>
      <p>homepage</p>
      <p>homepage</p>
      <p>homepage</p>
      <p>homepage</p>
      <p>homepage</p>
      <p>homepage</p>
      <p>homepage</p>
      <p>homepage</p>
      <p>homepage</p>
      <p>homepage</p>
      <p>homepage</p>
      <p>homepage</p>
      <p>homepage</p>
      <p>homepage</p>
      <p>homepage</p>
      <p>homepage</p>
      <p>homepage</p>
      <p>homepage</p>
    </div>
  );
};
