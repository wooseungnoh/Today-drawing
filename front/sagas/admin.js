import { all, delay, fork, put, takeEvery, call } from 'redux-saga/effects';
import axios from 'axios';
import {
  LOAD_DATA_SUCCESS,
  LOAD_DATA_FAILURE,
  LOAD_DATA_REQUEST,
  REMOVE_USER_DATA_REQUEST,
  REMOVE_USER_DATA_SUCCESS,
  REMOVE_USER_DATA_FAILURE,
} from '../reducers/admin';

//유저 데이터 불러오기
function loadUserListAPI() {
  return axios.get('http://localhost:5000/admin/loadlist', {
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
  return axios.post('http://localhost:5000/admin/secession', userData);
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

export default function* adminSaga() {
  yield all([fork(watchloadUserList), fork(watchremoveUser)]);
}
