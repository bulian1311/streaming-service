import React, { useState, useEffect, useRef } from "react";
import { useRouteMatch } from "react-router-dom";
import axios from 'axios';
import videojs from 'video.js'

export const VideoPlayer = () => {
  const [stream, setStream] = useState(false);
  const [videoJsOptions, setVideoJsOptions] = useState(null);
  const videoNode = useRef(null);

  let match = useRouteMatch("/stream/:username");

  const player = null;

  useEffect(() => {
    getVideoStream();
  }, []);

  const getVideoStream = async () => {
    const res = await axios.get("http://127.0.0.1:4000/api/user", {
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
              "http://127.0.0.1:8888" +
              "/live/" +
              res.data.streamKey +
              "/index.m3u8",
            type: "application/x-mpegURL",
          },
        ],
        fluid: true,
      },
      () => {
        player = videojs(videoNode, videoJsOptions, function onPlayerReady() {
          console.log("onPlayerReady", this);
        });
      }
    );

    return () => {
      if (player) {
        player.dispose();
      }
    };
  }

  if (!stream) return " Loading ... ";

  return (
    <div>
      <div data-vjs-player>
        <video ref={videoNode} />
      </div>
    </div>
  );
};
