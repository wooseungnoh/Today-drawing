import express from 'express';
import routes from '../routes';
import {
  secession,
  loadPostAndUser,
  editRole,
  deletePostFromAdmin,
} from '../controller/adminController';

const adminRouter = express();

adminRouter.post(routes.secession, secession);
adminRouter.post(routes.removepost, deletePostFromAdmin);
adminRouter.post(routes.editrole, editRole);
adminRouter.get(routes.loadlist, loadPostAndUser);

export default adminRouter;
