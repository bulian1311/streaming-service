import React, { useState, useEffect, useRef } from 'react';
import { useRouteMatch } from 'react-router-dom';
import axios from 'axios';
import videojs from 'video.js';

//import {useStore} from '../../hooks'

export const VideoPlayer = () => {
  //const { userStore } = useStore();
  const [stream, setStream] = useState(false);
  const [videoJsOptions, setVideoJsOptions] = useState(null);
  const videoNode = useRef(null);

  const player = null;

  let match = useRouteMatch('/stream/:username');

  const getVideoStream = async () => {
    const res = await axios.get('http://127.0.0.1:4000/api/user', {
      params: {
        username: match.params.username,
      },
    });

    setStream(true);

    setVideoJsOptions(
      {
        autoplay: false,
        controls: true,
        sources: [
          {
            src:
              'http://127.0.0.1:8888' +
              '/live/' +
              res.user.streamKey +
              '/index.m3u8',
            type: 'application/x-mpegURL',
          },
        ],
        fluid: true,
      },

      () => {
        player = videojs(videoNode, videoJsOptions, () => {
          console.log('onPlayerReady', this);
        });
      },
    );

    return () => {
      if (player) {
        player.dispose();
      }
    };
  };

  useEffect(() => {
    getVideoStream();
  }, [getVideoStream]);

  if (!stream) return ' Loading ... ';

  return (
    <div>
      <div data-vjs-player>{<video ref={videoNode} />}</div>
    </div>
  );
};
