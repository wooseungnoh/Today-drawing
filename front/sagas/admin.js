import { all, delay, fork, put, takeEvery, call } from 'redux-saga/effects';
import axios from 'axios';
import {
  LOAD_DATA_SUCCESS,
  LOAD_DATA_FAILURE,
  LOAD_DATA_REQUEST,
  REMOVE_USER_DATA_REQUEST,
  REMOVE_USER_DATA_SUCCESS,
  REMOVE_USER_DATA_FAILURE,
  REMOVE_POST_SUCCESS,
  REMOVE_POST_FAILURE,
  REMOVE_POST_REQUEST,
  EDITING_ROLE_SUCCESS,
  EDITING_ROLE_FAILURE,
  EDITING_ROLE_REQUEST,
} from '../reducers/admin';

//유저 데이터 불러오기
function loadUserListAPI() {
  return axios.get('/admin/loadlist', {
    withCredentials: true,
  });
}
function* loadUserList() {
  try {
    const result = yield call(loadUserListAPI);
    yield put({
      type: LOAD_DATA_SUCCESS,
      data: result.data,
    });
  } catch (e) {
    console.log(e);
    yield put({
      type: LOAD_DATA_FAILURE,
    });
  }
}
function* watchloadUserList() {
  yield takeEvery(LOAD_DATA_REQUEST, loadUserList);
}

//유저 삭제하기
function removeUserAPI(userData) {
  return axios.post('/admin/secession', userData);
}
function* removeUser(action) {
  try {
    const result = yield call(removeUserAPI, action.data);
    yield put({
      type: REMOVE_USER_DATA_SUCCESS,
      data: result.data,
    });
  } catch (e) {
    console.log(e);
    yield put({
      type: REMOVE_USER_DATA_FAILURE,
    });
  }
}
function* watchremoveUser() {
  yield takeEvery(REMOVE_USER_DATA_REQUEST, removeUser);
}

//포스트 삭제하기
function removePostAPI(postId) {
  return axios.post('/admin/removepost', postId);
}
function* removePost(action) {
  try {
    const result = yield call(removePostAPI, action.data);
    yield put({
      type: REMOVE_POST_SUCCESS,
      data: result.data,
    });
  } catch (e) {
    console.log(e);
    yield put({
      type: REMOVE_POST_FAILURE,
    });
  }
}
function* watchremovePost() {
  yield takeEvery(REMOVE_POST_REQUEST, removePost);
}

//권한 수정하기
function editingRoleAPI(userData) {
  return axios.post('/admin/editrole', userData);
}
function* editingRole(action) {
  try {
    const result = yield call(editingRoleAPI, action.data);
    yield put({
      type: EDITING_ROLE_SUCCESS,
      data: result.data,
    });
  } catch (e) {
    console.log(e);
    yield put({
      type: EDITING_ROLE_FAILURE,
    });
  }
}
function* watcheditingRole() {
  yield takeEvery(EDITING_ROLE_REQUEST, editingRole);
}

export default function* adminSaga() {
  yield all([
    fork(watcheditingRole),
    fork(watchloadUserList),
    fork(watchremoveUser),
    fork(watchremovePost),
  ]);
}
