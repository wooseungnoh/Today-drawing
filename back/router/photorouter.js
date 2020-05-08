import express from 'express';
import routes from '../routes';
import { uploadPhoto } from '../middlewares';
import { postUploadPhoto, getPhoto } from '../controller/photoController';

const photoRouter = express();

photoRouter.get(routes.photo, getPhoto);
photoRouter.post(routes.uploadphoto, uploadPhoto, postUploadPhoto);

export default photoRouter;
