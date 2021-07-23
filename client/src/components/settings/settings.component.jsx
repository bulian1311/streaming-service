import React from 'react';
// import axios from "axios";
// import PropTypes from "prop-types";

export const Settings = () => {
  // const [streamKey, setStreamKey] = useState("");

  // useEffect(() => {
  //   getStreamSettings();
  // }, []);

  // const getStreamSettings = async () => {
  //   const res = await axios.get("/settings/stream_key");
  //   setStreamKey(res.data.streamKey);
  // };

  // const generateStreamKey = async (e) => {
  //   const res = await axios.post("/settings/stream_key");
  //   setStreamKey(res.data.stream_key);
  // };

  return (
    <div>
      <h4>Streaming Key</h4>
      <div>
        <div>{/* <h5>{this.state.stream_key}</h5> */}</div>
        <div>
          {/* <button onClick={generateStreamKey}>Generate a new key</button> */}
        </div>
      </div>
    </div>
  );
};
