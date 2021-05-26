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

Visit your Postman in: `http://localhost:8000/`
## License

[MIT licensed](LICENSE)