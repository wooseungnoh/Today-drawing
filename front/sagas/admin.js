import { all, delay, fork, put, takeEvery, call } from 'redux-saga/effects';
import axios from 'axios';
import { LOAD_USER_DATA_SUCCESS, LOAD_USER_DATA_FAILURE, LOAD_USER_DATA_REQUEST } from '../reducers/admin';

function loadUserListAPI() {
  return axios.get('http://localhost:5000/loaduserlist', {
    withCredentials: true,
  });
}
function* loadUserList() {
  try {
    const result = yield call(loadUserListAPI);
    yield put({
      type: LOAD_USER_DATA_SUCCESS,
      data: result.data,
    });
  } catch (e) {
    console.log(e);
    yield put({
      type: LOAD_USER_DATA_FAILURE,
    });
  }
}
function* watchloadUserList() {
  yield takeEvery(LOAD_USER_DATA_REQUEST, loadUserList);
}

export default function* adminSaga() {
  yield all([fork(watchloadUserList)]);
}
