import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NoteModule } from './note/note.module';
@Module({
  imports: [
    MongooseModule.forRoot(process.env.DB_URL, { useNewUrlParser: true }),
    NoteModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
