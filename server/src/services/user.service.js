import bcrypt from 'bcrypt';
import { nanoid } from 'nanoid';

import userModel from '../models/user.model.js';
import mailService from '../services/mail.service.js';
import tokenService from '../services/token.service.js';
import UserDto from '../dtos/user.dto.js';
import ApiError from '../errors/api.error.js';

class UserService {
  async registration(email, password) {
    const existUser = await userModel.findOne({ email });

    if (existUser) {
      throw ApiError.BadRequest(
        `Пользователь с таким адресом ${email} уже существует.`,
      );
    }

    const hashPassword = await bcrypt.hash(password, 3);
    const activationLink = nanoid();
    const streamKey = nanoid();

    const user = await userModel.create({
      email,
      password: hashPassword,
      activationLink,
      streamKey,
    });

    await mailService.sendActivationMail(
      email,
      `${process.env.API_URL}/api/activate/${activationLink}`,
    );

    const userDto = new UserDto(user);
    const tokens = await tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return {
      ...tokens,
      user: userDto,
    };
  }

  async activate(activationLink) {
    const user = await userModel.findOne({ activationLink });

    if (!user) {
      throw ApiError.BadRequest('Не корректная ссылка активации.');
    }

    user.isActivated = true;

    await user.save();
  }

  async login(email, password) {
    const user = await userModel.findOne({ email });

    if (!user) {
      throw ApiError.BadRequest('Не верный логин или пароль.');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw ApiError.BadRequest('Не верный логин или пароль.');
    }

    const userDto = new UserDto(user);
    const tokens = await tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return {
      ...tokens,
      user: userDto,
    };
  }

  async logout(refreshToken) {
    const token = await tokenService.removeToken(refreshToken);
    return token;
  }

  async refresh(refreshToken) {
    if (!refreshToken) {
      throw ApiError.UnauthorizedError();
    }

    const userData = tokenService.validateRefreshToken(refreshToken);
    const tokenFromDb = await tokenService.findToken(refreshToken);

    if (!userData || !tokenFromDb) {
      throw ApiError.UnauthorizedError();
    }

    const user = await userModel.findById(userData.id);

    const userDto = new UserDto(user);
    const tokens = await tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return {
      ...tokens,
      user: userDto,
    };
  }

  async getAllUsers() {
    const users = await userModel.find();
    return users;
  }

  async getUserByEmail(email) {
    const user = await userModel.findOne({ email });
    return user;
  }
}

export default new UserService();
