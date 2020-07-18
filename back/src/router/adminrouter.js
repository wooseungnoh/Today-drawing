import express from 'express';
import routes from '../routes';
import {
  secession,
  loadPostAndUser,
  editRole,
  deletePostFromAdmin,
} from '../controller/adminController';

const adminRouter = express();

//회원 탈퇴
adminRouter.post(routes.secession, secession);

//포스트 삭제
adminRouter.delete(routes.removepost, deletePostFromAdmin);

//권한 수정
adminRouter.post(routes.editrole, editRole);

//회원, 게시글 로드
adminRouter.get(routes.loadlist, loadPostAndUser);

export default adminRouter;
