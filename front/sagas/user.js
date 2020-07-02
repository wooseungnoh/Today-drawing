import {
  all,
  fork,
  put,
  takeEvery,
  call,
  takeLatest,
} from 'redux-saga/effects';
import axios from 'axios';
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
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
  LOG_OUT_FAILURE,
  LOAD_LIKELIST_REQUEST,
  LOAD_LIKELIST_SUCCESS,
  LOAD_LIKELIST_FAILURE,
  LOAD_USER_FAILURE,
} from '../reducers/user';

function signUpAPI(signUpData) {
  return axios.post('/signup', signUpData, {
    withCredentials: true,
  });
}

function* signUp(action) {
  try {
    const result = yield call(signUpAPI, action.data);
    yield put({
      type: SIGN_UP_SUCCESS,
      data: result.data,
    });
  } catch (e) {
    console.log(e);
    yield put({
      type: SIGN_UP_FAILURE,
    });
  }
}

function* watchSignUp() {
  yield takeLatest(SIGN_UP_REQUEST, signUp);
}

function loginAPI(loginData) {
  return axios.post('/login', loginData, {
    withCredentials: true,
  });
}

function* login(action) {
  try {
    const result = yield call(loginAPI, action.data);
    yield put({
      type: LOG_IN_SUCCESS,
      data: result.data,
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

// 사용자 프로필 수정

function editingAPI(userID) {
  return axios.post('/editing', userID, {
    withCredentials: true,
  });
}

function* editing(action) {
  try {
    const result = yield call(editingAPI, action.data);
    const userData = JSON.parse(result.config.data);
    const { me, writerData } = userData;
    yield put({
      type: EDITING_PROFILE_SUCCESS,
      data: { ...me, ...writerData },
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

//유저 로딩
function loadUserAPI() {
  return axios.get('/load', {
    withCredentials: true,
  });
}
function* loadUser() {
  try {
    const result = yield call(loadUserAPI);
    yield put({
      type: LOAD_USER_SUCCESS,
      data: result.data,
    });
  } catch (e) {
    yield put({
      type: LOAD_USER_FAILURE,
    });
  }
}
function* watchloadUser() {
  yield takeEvery(LOAD_USER_REQUEST, loadUser);
}

// 로그아웃
function logOutAPI() {
  return axios.post(
    '/logout',
    {},
    {
      withCredentials: true,
    },
  );
}
function* logOut() {
  try {
    yield call(logOutAPI);
    yield put({
      type: LOG_OUT_SUCCESS,
    });
  } catch (e) {
    console.log(e);
    yield put({
      type: LOG_OUT_FAILURE,
    });
  }
}
function* watchLogOut() {
  yield takeEvery(LOG_OUT_REQUEST, logOut);
}

// 좋아하는 리스트 불러오기
function loadLikePostAPI() {
  return axios.get('/loadlikelist', {
    withCredentials: true,
  });
}
function* loadLikePost() {
  try {
    const result = yield call(loadLikePostAPI);
    yield put({
      type: LOAD_LIKELIST_SUCCESS,
      data: result.data,
    });
  } catch (e) {
    console.log(e);
    yield put({
      type: LOAD_LIKELIST_FAILURE,
    });
  }
}
function* watchloadLikePost() {
  yield takeEvery(LOAD_LIKELIST_REQUEST, loadLikePost);
}

export default function* userSaga() {
  yield all([
    fork(watchLogin),
    fork(watchSignUp),
    fork(watchEditing),
    fork(watchloadUser),
    fork(watchLogOut),
    fork(watchloadLikePost),
  ]);
}
