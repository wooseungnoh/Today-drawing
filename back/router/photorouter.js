import express from 'express';
import routes from '../routes';
import { uploadPhoto } from '../middlewares';
import {
  postUploadPhoto,
  postUploadPost,
  loadedPostList,
  loadedPhotoDetail,
  editPost,
  deletePost,
  like,
} from '../controller/photoController';

const photoRouter = express();

photoRouter.post(routes.uploadphoto, uploadPhoto, postUploadPhoto);

photoRouter.post(routes.uploadpost, postUploadPost);

photoRouter.get(routes.loadedpost, loadedPostList);

photoRouter.post(routes.photodetail, loadedPhotoDetail);

photoRouter.post(routes.editpost, editPost);

photoRouter.post(routes.deletepost, deletePost);

photoRouter.post(routes.like, like)

export default photoRouter;
