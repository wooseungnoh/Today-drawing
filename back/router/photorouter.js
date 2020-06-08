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
  unlike,
  loadWord,
  addWord,
  loadedAllPostList,
} from '../controller/photoController';

const photoRouter = express();

photoRouter.post(routes.uploadphoto, uploadPhoto, postUploadPhoto);

photoRouter.post(routes.uploadpost, postUploadPost);

photoRouter.get(routes.loadedpost, loadedPostList);
photoRouter.get(routes.loadedallpost, loadedAllPostList);

photoRouter.post(routes.photodetail, loadedPhotoDetail);

photoRouter.post(routes.editpost, editPost);

photoRouter.post(routes.deletepost, deletePost);

photoRouter.post(routes.like, like);
photoRouter.post(routes.unlike, unlike);

photoRouter.get(routes.loadword, loadWord)
photoRouter.post(routes.addword, addWord)
export default photoRouter;
