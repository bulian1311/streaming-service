import React, {useRef, useEffect} from 'react';
import Hls from 'hls.js';

import {StyledVideo} from './hls-player.syled'

export const HlsPlayer = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    video.muted = true;
    video.volume = 0;
    const videoSrc = '/videos/output.m3u8';

    if (Hls.isSupported()) {
      const hls = new Hls();

      hls.loadSource(videoSrc);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
          video.play();
      });
  } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = videoSrc;
      video.addEventListener('loadedmetadata', () => {
          video.play();
      });
  }});

  return (
    <div>
      <StyledVideo ref={videoRef} autoplay controls />
    </div>
  )
};
