export default class UserDto {
  email;
  id;
  isActivated;
  streamKey;

  constructor(model) {
    this.email = model.email;
    this.id = model._id;
    this.isActivated = model.isActivated;
    this.streamKey = model.streamKey;
  }
}
