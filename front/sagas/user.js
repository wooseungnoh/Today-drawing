import { all, delay, fork, put, takeEvery, call } from 'redux-saga/effects';
import axios from 'axios';
import user, {
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

function signUpAPI(signUpData) {
  return axios.post('http://localhost:5000/signup', signUpData, {
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
  yield takeEvery(SIGN_UP_REQUEST, signUp);
}

function loginAPI(loginData) {
  return axios.post('http://localhost:5000/login', loginData, {
    withCredentials: true,
  });
}

function* login(action) {
  console.log(action.data);
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

function editingAPI(userID) {
  return axios.post('http://localhost:5000/editing', userID, {
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

export default function* userSaga() {
  yield all([fork(watchLogin), fork(watchSignUp), fork(watchEditing)]);
}
