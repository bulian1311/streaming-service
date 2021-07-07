import commentModel from '../models/comment.model.js';
import trackModel from '../models/track.model.js';

class CommentService {
  async create(dto) {
    console.log(dto);
    const track = await trackModel.findById(dto.trackId);
    const comment = await commentModel.create({ ...dto, track: dto.trackId });

    track.comments.push(comment._id);
    await track.save();

    return comment;
  }
}

export default new CommentService();
