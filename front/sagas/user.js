import { all, delay, fork, put, takeEvery } from 'redux-saga/effects';

import {
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  SIGN_UP_SUCCESS,
  SIGN_UP_REQUEST,
  SIGN_UP_FAILURE,
  EDITING_PROFILE_SUCCESS,
  EDITING_PROFILE_REQUEST,
  EDITING_PROFILE_FAILURE,
} from '../reducers/user';

function loginAPI() {}

function* login() {
  try {
    yield delay(2000);
    yield put({
      type: LOG_IN_SUCCESS,
    });
  } catch (e) {
    console.log(e);
    yield put({
      type: LOG_IN_FAILURE,
    });
  }
}

function* watchLogin() {
  yield takeEvery(LOG_IN_REQUEST, login);
}

function signUpAPI() {}

function* signUp() {
  try {
    yield delay(2000);
    yield put({
      type: SIGN_UP_SUCCESS,
    });
  } catch (e) {
    console.log(e);
    yield put({
      type: SIGN_UP_FAILURE,
    });
  }
}

function* watchSignUp() {
  yield takeEvery(SIGN_UP_REQUEST, signUp);
}

function editingAPI() {}

function* editing() {
  try {
    yield delay(2000);
    yield put({
      type: EDITING_PROFILE_SUCCESS,
    });
  } catch (e) {
    console.log(e);
    yield put({
      type: EDITING_PROFILE_FAILURE,
    });
  }
}

function* watchEditing() {
  yield takeEvery(EDITING_PROFILE_REQUEST, editing);
}

export default function* userSaga() {
  yield all([fork(watchLogin), fork(watchSignUp), fork(watchEditing)]);
}
