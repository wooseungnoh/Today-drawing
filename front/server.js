const express = require('express');
const next = require('next');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const expressSession = require('express-session');

const dev = process.env.NODE_ENV !== 'production';
const prod = process.env.NODE_ENV === 'production';

const app = next({ dev });
const handle = app.getRequestHandler();
dotenv.config();

app.prepare().then(() => {
  const server = express();

  server.use(morgan('dev'));
  server.use(express.json());
  server.use(express.urlencoded({ extended: true }));
  server.use(cookieParser(process.env.SECRET_KEY));
  server.use(
    expressSession({
      resave: false,
      saveUninitialized: false,
      secret: process.env.SECRET_KEY,
      cookie: {
        httpOnly: true,
        secure: false,
      },
    }),
  );
  server.get('*', (req, res) => {
    return handle(req, res);
  });
  server.listen(prod ? process.env.PORT : 3060, (err) => {
    console.log(`${process.env.PORT ? process.env.PORT : "http://localhost:3060"}`);
  });
});
