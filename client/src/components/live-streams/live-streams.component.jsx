import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../../hooks';

export const LiveStreams = () => {
  const { streamStore } = useStore();

  useEffect(() => {
    streamStore.getLiveStreams();
  }, []);

  let streams = streamStore.liveStreams.map((stream, index) => {
    return (
      <div key={index}>
        <span>LIVE</span>
        <Link to={'/stream/' + stream.username}>
          <div>
            <img src={'/thumbnails/' + stream.stream_key + '.png'} />
          </div>
        </Link>

        <span>
          <Link to={'/stream/' + stream.username}>{stream.username}</Link>
        </span>
      </div>
    );
  });

  return (
    <div>
      <h4>Live Streams</h4>
      <hr />
      {<div>{streams}</div>}
    </div>
  );
};
