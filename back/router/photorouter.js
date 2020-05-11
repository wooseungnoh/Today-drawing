import express from 'express';
import routes from '../routes';
import { uploadPhoto } from '../middlewares';
import {
  postUploadPhoto,
  getPhoto,
  postUploadPost,
  loadedPostList,
  loadedPhotoDetail,
} from '../controller/photoController';

const photoRouter = express();

photoRouter.get(routes.photo, getPhoto);
photoRouter.post(routes.uploadphoto, uploadPhoto, postUploadPhoto);

photoRouter.post(routes.uploadpost, postUploadPost);

photoRouter.get(routes.loadedpost, loadedPostList);

photoRouter.post(routes.photodetail, loadedPhotoDetail);

export default photoRouter;
