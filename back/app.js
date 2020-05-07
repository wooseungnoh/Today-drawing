import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import passport from 'passport';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import globalRouter from './router/globalrouter';

import './passport';
const app = express();

app.use(helmet());
app.use(morgan('dev'));
app.use(cookieParser());
app.use(
  cors({
    origin: true,
    credentials: true,
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());

app.use('/', globalRouter);

export default app;
