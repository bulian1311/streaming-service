import CreateCommentDto from '../dtos/create-comment.dto.js';
import commentService from '../services/comment.service.js';

class CommentController {
  async getAll() {}

  async create(req, res, next) {
    try {
      const createCommentDto = new CreateCommentDto(req.body);

      const comment = await commentService.create(createCommentDto);

      res.json(comment);
    } catch (err) {
      next(err);
    }
  }
}

export default new CommentController();
