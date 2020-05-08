import express from 'express';
import { login, logout, signup, editing, load, loadUser } from '../controller/userController';
import routes from '../routes';

const globalRouter = express();

globalRouter.post(routes.login, login);
globalRouter.post(routes.logout, logout);
globalRouter.post(routes.signup, signup, login);
globalRouter.post(routes.editing, editing);
globalRouter.get(routes.load, loadUser);

export default globalRouter;
