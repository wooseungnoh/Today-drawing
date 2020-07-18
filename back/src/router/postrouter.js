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

// 포스트 작성화면의 미리보기 이미지 업로드
postRouter.post(routes.uploadphoto, uploadPhotoMulter, uploadPhoto);

// 실제 포스트 업로드
postRouter.post(routes.uploadpost, uploadPost);

// 포스트 불러오기
postRouter.get(routes.loadedpost, loadedPostList);

// 포스트 디테일 불러오기
postRouter.post(routes.photodetail, loadedPostDetail);

// 포스트 수정
postRouter.post(routes.editpost, editPost);

// 포스트 삭제
postRouter.post(routes.deletepost, deletePost);

// 좋아요 / 좋아요 삭제
postRouter.post(routes.like, like);
postRouter.post(routes.unlike, unlike);

// 오늘의 단어 불러오기 / 추가
postRouter.get(routes.loadword, loadWord);
postRouter.post(routes.addword, addWord);

// 선택된 단어 불러오기
postRouter.post(routes.select, loadedSelectedPostList);
export default postRouter;
