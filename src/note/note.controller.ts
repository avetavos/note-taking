import {
  Controller,
  HttpStatus,
  NotFoundException,
  Res,
  Query,
  Param,
  Body,
  Post,
  Get,
  Delete,
  Put,
} from '@nestjs/common';
import { Response } from 'express';
import { CreateNoteDTO } from './dto/note.dto';
import { GetAllQuery } from './dto/get-all.dto';
import { NoteService } from './note.service';

@Controller('notes')
export class NoteController {
  constructor(private noteService: NoteService) {}

  @Get('/')
  async getAllNote(@Res() res: Response, @Query() query: GetAllQuery) {
    const notes = await this.noteService.getNotes(
      query.sortBy,
      query.orderBy,
      query.tags,
    );
    return res.status(HttpStatus.OK).json({
      notes,
    });
  }

  @Get('/:noteId')
  async getNote(@Res() res: Response, @Param('noteId') noteId) {
    const note = await this.noteService.getNote(noteId);
    if (!note) throw new NotFoundException('Note does not exists');
    return res.status(HttpStatus.OK).json({
      note,
    });
  }

  @Post('/')
  async createNote(@Res() res: Response, @Body() noteParams: CreateNoteDTO) {
    const note = await this.noteService.createNote(noteParams);
    return res.status(HttpStatus.CREATED).json({
      note,
    });
  }

  @Put('/:noteId')
  async updateNote(
    @Res() res: Response,
    @Param('noteId') noteId,
    noteParams: CreateNoteDTO,
  ) {
    const note = await this.noteService.updateNote(noteId, noteParams);
    return res.status(HttpStatus.OK).json({
      note,
    });
  }

  @Delete('/:noteId')
  async deleteNote(@Res() res: Response, @Param('noteId') noteId) {
    await this.noteService.deleteNote(noteId);
    return res.status(HttpStatus.OK);
  }
}
