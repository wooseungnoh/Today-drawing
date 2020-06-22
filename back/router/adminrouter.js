import express from 'express';
import routes from '../routes';
import { secession, loadPostAndUser } from '../controller/adminController';

const adminRouter = express();

adminRouter.post(routes.secession, secession);
adminRouter.get(routes.loadlist, loadPostAndUser);

export default adminRouter;
