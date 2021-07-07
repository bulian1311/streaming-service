import trackModel from '../models/track.model.js';
import commentModel from '../models/comment.model.js';

class TrackService {
  async create(dto, picture, audio) {
    const track = await trackModel.create({
      ...dto,
      listens: 0,
      picture: picture.path,
      audio: audio.path,
    });
    return track;
  }

  async getAll(limit = 10, skip = 0) {
    const tracks = await trackModel
      .find()
      .skip(Number(skip))
      .limit(Number(limit));
    return tracks;
  }

  async getOneById(id) {
    const track = await trackModel.findById(id).populate('comments');
    return track;
  }

  async search(query) {
    const tracks = await trackModel.find({
      name: { $regex: new RegExp(query, 'i') },
    });

    return tracks;
  }

  async deleteById(id) {
    const track = await trackModel.findByIdAndRemove(id);
    return track;
  }
}

export default new TrackService();
