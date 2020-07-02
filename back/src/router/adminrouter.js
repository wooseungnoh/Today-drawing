import express from 'express';
import routes from '../routes';
import {
  secession,
  loadPostAndUser,
  editRole,
} from '../controller/adminController';
import { deletePost } from '../controller/postController';

const adminRouter = express();

adminRouter.post(routes.secession, secession);
adminRouter.post(routes.removepost, deletePost);
adminRouter.post(routes.editrole, editRole);
adminRouter.get(routes.loadlist, loadPostAndUser);

export default adminRouter;
