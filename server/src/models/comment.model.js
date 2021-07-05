import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const CommentSchema = new Schema({
  username: { type: String, unique: true, required: true },
  text: { type: String },
  track: {type: Schema.Types.ObjectId, ref: 'Track'}
});

export default model('Comment', CommentSchema);
