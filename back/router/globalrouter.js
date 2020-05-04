import express from 'express';
import { login, logout, signup } from '../controller/userController';
import routes from '../routes';

const globalRouter = express();

globalRouter.get(routes.login, login);
globalRouter.get(routes.logout, logout);
globalRouter.get(routes.signup, signup);

export default globalRouter;
