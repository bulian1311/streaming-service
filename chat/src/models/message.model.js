import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const MessageSchema = new Schema({
  username: { type: String, required: true },
  message: { type: String, required: true },
});

export default model('Message', MessageSchema);