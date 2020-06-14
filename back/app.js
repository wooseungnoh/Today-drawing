import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import passport from 'passport';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import MongoStore from 'connect-mongo';
import globalRouter from './router/globalrouter';
import session from 'express-session';
import mongoose from 'mongoose';

import './passport';
import photoRouter from './router/photorouter';
const app = express();

const CokieStore = MongoStore(session);

app.use(helmet());
app.use(morgan('dev'));
app.use('/', express.static('uploads'));
app.use(cookieParser());
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
    secret: '1D@%$Fw!@DFWwfd$$%@Q!__%^(fdswe!',
    resave: true,
    saveUninitialized: false,
    store: new CokieStore({ mongooseConnection: mongoose.connection }),
  }),
);
app.use(passport.initialize());
app.use(passport.session());

app.use('/', globalRouter);
app.use('/upload', photoRouter);

export default app;
