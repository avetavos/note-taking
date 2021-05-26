import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Note } from './interfaces/note.interface';
import { CreateNoteDTO } from './dto/note.dto';

@Injectable()
export class NoteService {
  constructor(@InjectModel('Note') private readonly noteModel: Model<Note>) {}

  async getNotes(): Promise<Note[]> {
    const notes = await this.noteModel.find();
    return notes;
  }

  async getNote(noteId: string): Promise<Note> {
    const note = await this.noteModel.findById(noteId);
    return note;
  }

  async createNote(newNote: CreateNoteDTO): Promise<Note> {
    const createdNote = await new this.noteModel(newNote).save();
    return createdNote;
  }

  async updateNote(noteId: string, updateNote: CreateNoteDTO): Promise<Note> {
    const updatedNote = await this.noteModel.findByIdAndUpdate(
      noteId,
      updateNote,
      {
        new: true,
      },
    );
    return updatedNote;
  }

  async deleteNote(noteId: string): Promise<void> {
    await this.noteModel.findByIdAndDelete(noteId);
  }
}
