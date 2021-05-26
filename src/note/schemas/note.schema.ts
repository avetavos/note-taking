import { Schema } from 'mongoose';

export const NoteSchema = new Schema({
  title: { type: String, required: true },
  content: String,
  tags: [String],
  createdAt: { type: Date, default: Date.now },
});
