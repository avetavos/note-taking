import { Document } from 'mongoose';

export interface Note extends Document {
  readonly title: string;
  readonly content?: string;
  readonly tags?: string[];
  readonly createdAt: Date;
}
