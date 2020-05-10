import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import passport from 'passport';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import globalRouter from './router/globalrouter';
import session from 'express-session';

import './passport';
import photoRouter from './router/photorouter';
const app = express();

app.use(helmet());
app.use(morgan('dev'));
app.use('/', express.static('uploads'))
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
  }),
);
app.use(passport.initialize());
app.use(passport.session());

app.use('/', globalRouter);
app.use('/upload', photoRouter)

export default app;
