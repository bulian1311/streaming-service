export default class CreateTrackDto {
  name;
  artist;
  text;

  constructor(model) {
    this.name = model.name;
    this.artist = model.artist;
    this.text = model.text;
  }
}