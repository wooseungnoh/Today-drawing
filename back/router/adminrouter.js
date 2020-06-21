import express from 'express';
import routes from '../routes';
import { secession } from '../controller/adminController';

const adminRouter = express();

adminRouter.post(routes.secession, secession);

export default adminRouter;