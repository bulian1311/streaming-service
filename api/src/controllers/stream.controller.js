import streamService from '../services/stream.service.js';
import ApiError from '../errors/api.error.js';

class StreamController {
  async getStreams(req, res, next) {
    try {
      const streams = req.query.streams;
      if (!streams) next(new ApiError.BadRequest('Необходимы параметры.'));

      const streamingUsers = await streamService.getStreamsInfo(streams);

      res.json(streamingUsers);
    } catch (err) {
      next(err);
    }
  }

  async getStreamKey(req, res, next) {
    try {
      const email = req.user.email;

      const streamKey = await streamService.getStreamKeyByEmail(email);

      res.json(streamKey);
    } catch (err) {
      next(err);
    }
  }

  async updateStreamKey(req, res, next) {
    try {
      const email = req.user.email;

      const streamKey = await streamService.updateStreamKeyByEmail(email);

      res.json(streamKey);
    } catch (err) {
      next(err);
    }
  }
}

export default new StreamController();
