import express from 'express';
import routes from '../routes';
import { secession, loadPostAndUser, removePost } from '../controller/adminController';

const adminRouter = express();

adminRouter.post(routes.secession, secession);
adminRouter.post(routes.removepost, removePost);
adminRouter.get(routes.loadlist, loadPostAndUser);

export default adminRouter;
