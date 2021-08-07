import React, { useRef, useEffect } from 'react';
import Hls from 'hls.js';

import {HlsPlayerControls} from '../'
import {StyledVideo} from './hls-player.syled'

export const HlsPlayer = () => {
  const videoRef = useRef();
  
  useEffect(() => {
    videoRef.current.muted = true;
    const videoSrc = '/videos/output.m3u8';

    if (Hls.isSupported()) {
      const hls = new Hls();

      hls.loadSource(videoSrc);
      hls.attachMedia(videoRef.current);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
          videoRef.current.play();
      });
  } else if (videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
      videoRef.current.src = videoSrc;
      videoRef.current.addEventListener('loadedmetadata', () => {
          videoRef.current.play();
      });
  }});

  const handleMute = () => {
    videoRef.current.muted = !videoRef.current.muted;
  }

  const handleVolume = (volume) => {
    videoRef.current.muted = false;
    videoRef.current.volume = volume;
  }

  const handleFullScreen = () => {
    const fullScreenEnabled = !!(document.fullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled || document.webkitSupportsFullscreen || document.webkitFullscreenEnabled || document.createElement('video').webkitRequestFullScreen);

  }

  return (
    <>
      <StyledVideo ref={videoRef} autoplay controls />
      <HlsPlayerControls handleMute={handleMute} handleVolume={handleVolume} />
    </>
  )
};
