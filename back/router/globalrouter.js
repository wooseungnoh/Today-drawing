import express from 'express';
import { login, logout, signup, editing } from '../controller/userController';
import routes from '../routes';

const globalRouter = express();

globalRouter.post(routes.login, login);
globalRouter.post(routes.logout, logout);
globalRouter.post(routes.signup, signup, login);
globalRouter.post(routes.editing, editing);

export default globalRouter;
