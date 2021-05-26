# Note Taking Application

## Prerequisites
- Node (>= 8.9.0)
- Docker (Optional)
## Installation and running the app for Docker

```bash
$ npm run init
```

## Running the app for local environment
Please change MongoDB contention URI in `./src/app.module.ts` to localhost:27017 for localhost
```js
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/note_tacking_db', { useNewUrlParser: true }),
    NoteModule,
  ],
  controllers: [],
  providers: [],
})
```

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## How to work

Visit your Postman in: `http://localhost:8000/notes`

- `GET /notes` for get all note your can sent querystring to sort
  - sortBy : `title` or `createdAt`
  - orderBy : `asc` of `desc` (default `asc`)
  - tags : input `tag name` when you want to search by tag
- `GET /notes/:noteId` for get note by id
- `POST /notes` for create new note
- `PUT /notes/:noteId` for update note by id
- `POST /notes/:noteId` for delete note by id

## License

[MIT licensed](LICENSE)