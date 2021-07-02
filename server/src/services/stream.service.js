import { nanoid } from 'nanoid';

import UserModel from '../models/user.model.js';
import ApiError from '../errors/api.error.js';

class StreamService {
  async getStreamsInfo(streamsInfo) {
    let streams = JSON.parse(streamsInfo);
    let query = { $or: [] };

    for (let stream in streams) {
      if (!streams.hasOwnProperty(stream)) continue;
      query.$or.push({ stream_key: stream });
    }

    const users = await UserModel.find(query);

    return users;
  }

  async getStreamKeyByEmail(email) {
    const user = await UserModel.findOne({ email });

    if (!user.streamKey) throw new ApiError.NotFoundError();

    return user.streamKey;
  }

  async updateStreamKeyByEmail(email) {
    const user = await UserModel.findOneAndUpdate(
      { email },
      { streamKey: nanoid() },
    );

    return user.streamKey;
  }
}

export default StreamService;
