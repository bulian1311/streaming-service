import React from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";

export const LiveStreams = () => {
  // const [liveStreams, setLiveStreams] = useState([]);

  // useEffect(() => {
  //   getLiveStreams();
  // }, []);

  // const getLiveStreams = async () => {
  //   const res = await axios.get("http://127.0.0.1:8888/api/streams");

  //   let streams = res.data;

  //   if (typeof (streams["live"] !== "undefined")) {
  //     getStreamsInfo(streams["live"]);
  //   }
  // };

  // const getStreamsInfo = async (live_streams) => {
  //   const res = await axios.get("http://127.0.0.1:4000/api/streams/info", {
  //     params: {
  //       streams: live_streams,
  //     },
  //   });

  //   setLiveStreams(res.data);
  // };

  // let streams = liveStreams.map((stream, index) => {
  //   return (
  //     <div key={index}>
  //       <span>LIVE</span>
  //       <Link to={"/stream/" + stream.username}>
  //         <div>
  //           <img src={"/thumbnails/" + stream.stream_key + ".png"} />
  //         </div>
  //       </Link>

  //       <span>
  //         <Link to={"/stream/" + stream.username}>{stream.username}</Link>
  //       </span>
  //     </div>
  //   );
  // });

  return (
    <div>
      <h4>Live Streams</h4>
      <hr />
      {/* <div>{streams}</div> */}
    </div>
  );
};
