import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const TrackSchema = new Schema({
  name: { type: String, unique: true, required: true },
  picture: { type: String },
  artist: { type: String },
  text: { type: String },
  listens: { type: String },
  audio: { type: String },
  comments: { type: [Schema.Types.ObjectId], ref: 'Comment' }
});

export default model('Track', TrackSchema);
