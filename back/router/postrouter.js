import express from 'express';
import routes from '../routes';
import { uploadPhotoMulter } from '../middlewares';
import {
  uploadPhoto,
  uploadPost,
  loadedPostList,
  loadedPostDetail,
  editPost,
  deletePost,
  like,
  unlike,
  loadWord,
  addWord,
  loadedSelectedPostList,
} from '../controller/postController';

const postRouter = express();

postRouter.post(routes.uploadphoto, uploadPhotoMulter, uploadPhoto);

postRouter.post(routes.uploadpost, uploadPost);

postRouter.get(routes.loadedpost, loadedPostList);

postRouter.post(routes.photodetail, loadedPostDetail);

postRouter.post(routes.editpost, editPost);

postRouter.post(routes.deletepost, deletePost);

postRouter.post(routes.like, like);
postRouter.post(routes.unlike, unlike);

postRouter.get(routes.loadword, loadWord);
postRouter.post(routes.addword, addWord);

postRouter.post(routes.select, loadedSelectedPostList);
export default postRouter;
