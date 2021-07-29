import React, { useState, useEffect, useRef } from 'react';
import { useRouteMatch } from 'react-router-dom';
import axios from 'axios';
import videojs from 'video.js';

//import {useStore} from '../../hooks'

export const VideoPlayer = () => {
  //const { userStore } = useStore();
  //const [stream, setStream] = useState(true);
  //const [videoJsOptions, setVideoJsOptions] = useState(null);
  const videoNode = React.useRef(null)
  const player = React.useRef(null)
  React.useEffect(() => {
    player.current = videojs(videoNode.current, {
            autoplay: false,
            controls: true,
            sources: [
              {
                src:
                  'http://127.0.0.1:3001' +
                  '/videos/output.m3u8',
                type: 'application/x-mpegURL',
              },
            ],
            fluid: true,
          })
    return () => {
      player.current.dispose()
    }
  }, [])

  //let match = useRouteMatch('/stream/:username');

  //const getVideoStream = async () => {
    // const res = await axios.get('http://127.0.0.1:4000/api/user', {
    //   params: {
    //     username: match.params.username,
    //   },
    // });

    //setStream(true);

  //   setVideoJsOptions(
  //     {
  //       autoplay: false,
  //       controls: true,
  //       sources: [
  //         {
  //           src:
  //             'http://127.0.0.1:3001' +
  //             '/videos/output.m3u8',
  //           type: 'application/x-mpegURL',
  //         },
  //       ],
  //       fluid: true,
  //     },
  //   );

  //   return () => {
  //     if (player) {
  //       player.dispose();
  //     }
  //   };
  // };

  // useEffect(async () => {
  //   await getVideoStream();

    // player = videojs(videoNode, videoJsOptions, () => {
    //   console.log('onPlayerReady', this);
    // });
  //}, [getVideoStream]);

  //if (!stream) return ' Loading ... ';

  return (
    <div>
      <div data-vjs-player>{<video ref={videoNode} />}</div>
    </div>
  );
};
