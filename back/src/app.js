import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import passport from 'passport';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import MongoStore from 'connect-mongo';
import session from 'express-session';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import './passport';
import globalRouter from './router/globalrouter';
import postRouter from './router/postrouter';
import adminRouter from './router/adminrouter';
dotenv.config();
const app = express();

const CokieStore = MongoStore(session);

app.use(helmet());
app.use(morgan('dev'));
app.use('/', express.static('uploads'));
app.use(cookieParser(process.env.SECRET_KEY));
app.use(
  cors({
    origin: true,
    credentials: true,
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: process.env.SECRET_KEY,
    resave: true,
    saveUninitialized: false,
    cookie: { secure: true },
    store: new CokieStore({ mongooseConnection: mongoose.connection }),
  }),
);
app.use(passport.initialize());
app.use(passport.session());

app.use('/', globalRouter);
app.use('/upload', postRouter);
app.use('/admin', adminRouter);

export default app;
