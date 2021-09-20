import React, { useRef, useEffect } from 'react';
import Hls from 'hls.js';

import { HlsPlayerControls } from './hls-player-controls';
import { StyledVideo, VideoContainer } from './hls-player.syled';

export const HlsPlayer = () => {
  const videoRef = useRef();
  const videoContainer = useRef();

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
    }
  });

  const handleMute = () => {
    videoRef.current.muted = !videoRef.current.muted;
  };

  const handleVolume = (volume) => {
    videoRef.current.muted = false;
    videoRef.current.volume = volume;
  };

  const isFullScreen = () => {
    return !!(
      document.fullscreen ||
      document.webkitIsFullScreen ||
      document.mozFullScreen ||
      document.msFullscreenElement ||
      document.fullscreenElement
    );
  };

  const setFullscreenData = (state) => {
    videoContainer.current.setAttribute('data-fullscreen', !!state);
  };

  const handleFullScreen = () => {
    // const fullScreenEnabled = !!(
    //   document.fullscreenEnabled ||
    //   document.mozFullScreenEnabled ||
    //   document.msFullscreenEnabled ||
    //   document.webkitSupportsFullscreen ||
    //   document.webkitFullscreenEnabled ||
    //   document.createElement('video').webkitRequestFullScreen
    // );

    if (isFullScreen()) {
      if (document.exitFullscreen) document.exitFullscreen();
      else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
      else if (document.webkitCancelFullScreen)
        document.webkitCancelFullScreen();
      else if (document.msExitFullscreen) document.msExitFullscreen();
      setFullscreenData(false);
    } else {
      if (videoContainer.current.requestFullscreen)
        videoContainer.current.requestFullscreen();
      else if (videoContainer.current.mozRequestFullScreen)
        videoContainer.current.mozRequestFullScreen();
      else if (videoContainer.current.webkitRequestFullScreen)
        videoContainer.current.webkitRequestFullScreen();
      else if (videoContainer.current.msRequestFullscreen)
        videoContainer.current.msRequestFullscreen();
      setFullscreenData(true);
    }
  };

  useEffect(() => {
    document.addEventListener('fullscreenchange', function (e) {
      setFullscreenData(!!(document.fullscreen || document.fullscreenElement));
    });
    document.addEventListener('webkitfullscreenchange', function () {
      setFullscreenData(!!document.webkitIsFullScreen);
    });
    document.addEventListener('mozfullscreenchange', function () {
      setFullscreenData(!!document.mozFullScreen);
    });
    document.addEventListener('msfullscreenchange', function () {
      setFullscreenData(!!document.msFullscreenElement);
    });
  });

  return (
    <VideoContainer ref={videoContainer}>
      <StyledVideo ref={videoRef} autoplay loop />
      <HlsPlayerControls
        handleMute={handleMute}
        handleVolume={handleVolume}
        handleFullScreen={handleFullScreen}
      />
    </VideoContainer>
  );
};
