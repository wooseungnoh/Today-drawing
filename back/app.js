import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import globalRouter from './router/globalrouter';

const app = express();

app.use(helmet());
app.use(morgan('dev'));

app.use('/', globalRouter);

export default app;
