import trackModel from '../models/track.model.js'
import commentModel from '../models/comment.model.js'

class TrackService {
  async create(dto) {
    const track = await trackModel.create({ ...dto, listens: 0 });
    return track;
  }

  async getAll() {
    const tracks = await trackModel.find();
    return tracks;
  }

  async getOneById(id) {
    const track = await trackModel.findById(id);
    return track;
  }

  async deleteById(id) {
    const track = await trackModel.findByIdAndRemove(id);
    return track;
  }
};

export default new TrackService;