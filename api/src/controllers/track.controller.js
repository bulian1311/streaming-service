import { validationResult } from 'express-validator';
import trackService from '../services/track.service.js';
import CreateTrackDto from '../dtos/create-track.dto.js';
import ApiError from '../errors/api.error.js';

class TrackController {
  async create(req, res, next) {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return next(ApiError.BadRequest('Ошибка валидации', errors.array()));
      }

      const { picture, audio } = req.files;

      const trackDto = new CreateTrackDto(req.body);

      const track = await trackService.create(trackDto, picture[0], audio[0]);

      res.json(track);
    } catch (err) {
      next(err);
    }
  }

  async getAll(req, res, next) {
    try {
      const { limit, skip } = req.query;

      const tracks = await trackService.getAll(limit, skip);
      res.json(tracks);
    } catch (err) {
      next(err);
    }
  }

  async getOne(req, res, next) {
    try {
      const { id } = req.params;
      const track = await trackService.getOneById(id);

      res.json(track);
    } catch (err) {
      next(err);
    }
  }

  async search(req, res, next) {
    try {
      const { query } = req.query;

      const tracks = await trackService.search(query);

      res.json(tracks);
    } catch (err) {
      next(err);
    }
  }

  async delete(req, res, next) {
    try {
      const { id } = req.params;
      const track = await trackService.deleteById(id);

      res.json(track);
    } catch (err) {
      next(err);
    }
  }
}

export default new TrackController();
