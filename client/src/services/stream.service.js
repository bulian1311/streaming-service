import axios from 'axios';
import { streamApi } from '../http';

export class StreamService {
  static async getLiveStreams() {
    const res = await streamApi.get('/streams');

    return res.data;
  }

  static async getStreamsInfo(liveStreams) {
    const res = await axios.get('http://127.0.0.1:4000/api/streams/info', {
      params: {
        streams: liveStreams,
      },
    });

    return res.data;
  }
}
