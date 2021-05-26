import {
  Controller,
  HttpStatus,
  Post,
  Res,
  Body,
  Get,
  Param,
  NotFoundException,
  Delete,
  Put,
} from '@nestjs/common';
import { CreateNoteDTO } from './dto/note.dto';
import { NoteService } from './note.service';

@Controller('notes')
export class NoteController {
  constructor(private noteService: NoteService) {}

  @Get('/')
  async getAllNote(@Res() res) {
    const notes = await this.noteService.getNotes();
    return res.status(HttpStatus.OK).json({
      notes,
    });
  }

  @Get('/:noteId')
  async getNote(@Res() res, @Param('noteId') noteId) {
    const note = await this.noteService.getNote(noteId);
    if (!note) throw new NotFoundException('Note does not exists');
    return res.status(HttpStatus.OK).json({
      note,
    });
  }

  @Post('/')
  async createNote(@Res() res, @Body() noteParams: CreateNoteDTO) {
    const note = await this.noteService.createNote(noteParams);
    return res.status(HttpStatus.CREATED).json({
      note,
    });
  }

  @Put('/:noteId')
  async updateNote(
    @Res() res,
    @Param('noteId') noteId,
    noteParams: CreateNoteDTO,
  ) {
    const note = await this.noteService.updateNote(noteId, noteParams);
    return res.status(HttpStatus.OK).json({
      note,
    });
  }

  @Delete('/:noteId')
  async deleteNote(@Res() res, @Param('noteId') noteId) {
    await this.noteService.deleteNote(noteId);
    return res.status(HttpStatus.OK);
  }
}
