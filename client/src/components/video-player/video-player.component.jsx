import React from 'react';
// import videojs from 'video.js';
// import 'video.js/dist/video-js.css';

export const VideoPlayer = () => {
  const videoRef = React.useRef();

  // React.useEffect(() => {
  //   const videoElement = videoRef.current;
  //   let player;
  //   if (videoElement) {
  //     player = videojs(videoElement, options, () => {
  //       console.log('player is ready');
  //       videoElement.muted = true;
  //       videoElement.volume = 1;
  //     });
  //   }
  //   return () => {
  //     if (player) {
  //       player.dispose();
  //     }
  //   };
  // }, [options]);

  return (
    <div data-vjs-player>
      <video ref={videoRef} className="video-js vjs-big-play-centered" />
    </div>
  );
};
export default VideoPlayer;
