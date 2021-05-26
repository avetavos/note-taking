# Note Taking Application

## Installation and running the app for Docker

```bash
$ npm run init
```

## Running the app for local environment
<i>required: Node.js version 8++</i>
Please change MongoDB contention URI in [app.module.ts](./src/app.module.ts) to localhost:27017 for localhost
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
## License

[MIT licensed](LICENSE)