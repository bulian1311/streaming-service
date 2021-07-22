export default class CreateCommentkDto {
  username;
  text;
  trackId;

  constructor(body) {
    this.username = body.username;
    this.text = body.text;
    this.trackId = body.trackId;
  }
}
