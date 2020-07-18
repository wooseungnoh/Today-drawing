import express from 'express';
import {
  login,
  logout,
  signup,
  editing,
  load,
  loadUser,
  loadLikeList,
  loadUserList,
} from '../controller/userController';
import routes from '../routes';

const globalRouter = express();

//로그인
globalRouter.post(routes.login, login);

//로그아웃
globalRouter.post(routes.logout, logout);

//회원가입
globalRouter.post(routes.signup, signup, login);

//회원정보 수정
globalRouter.post(routes.editing, editing);

//유저 정보 로드
globalRouter.get(routes.load, loadUser);

//좋아요 리스트 불러오기
globalRouter.get(routes.loadlikelist, loadLikeList);


export default globalRouter;
