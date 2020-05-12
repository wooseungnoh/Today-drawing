import { all, delay, fork, put, takeEvery, call } from 'redux-saga/effects';
import axios from 'axios';

import {
  UPPLOAD_CANVAS_REQUEST,
  UPPLOAD_CANVAS_SUCCESS,
  UPPLOAD_CANVAS_FAILURE,
  UPPLOAD_POST_REQUEST,
  UPPLOAD_POST_SUCCESS,
  UPPLOAD_POST_FAILURE,
  LOAD_GALLERY_SUCCESS,
  LOAD_GALLERY_FAILURE,
  LOAD_GALLERY_REQUEST,
  LOAD_PHOTO_DETAIL_FAILURE,
  LOAD_PHOTO_DETAIL_SUCCESS,
  LOAD_PHOTO_DETAIL_REQUEST,
  EDIT_PHOTO_DETAIL_SUCCESS,
  EDIT_PHOTO_DETAIL_FAILURE,
  EDIT_PHOTO_DETAIL_REQUEST,
} from '../reducers/drawing';

// 미리보기 사진 업로드

function addPhotoApi(photoData) {
  return axios.post('http://localhost:5000/upload/uploadphoto', photoData, {
    withCredentials: true,
  });
}

function* addPhoto(action) {
  try {
    const result = yield call(addPhotoApi, action.data);
    yield put({
      type: UPPLOAD_CANVAS_SUCCESS,
      data: result.data,
    });
  } catch (e) {
    console.log(e);
    yield put({
      type: UPPLOAD_CANVAS_FAILURE,
    });
  }
}

function* watchAddPhoto() {
  yield takeEvery(UPPLOAD_CANVAS_REQUEST, addPhoto);
}

// post upload

function addPostApi(postData) {
  return axios.post('http://localhost:5000/upload/uploadpost', postData, {
    withCredentials: true,
  });
}

function* addPost(action) {
  try {
    const result = yield call(addPostApi, action.data);
    yield put({
      type: UPPLOAD_POST_SUCCESS,
      data: result.data,
    });
  } catch (e) {
    console.log(e);
    yield put({
      type: UPPLOAD_POST_FAILURE,
    });
  }
}

function* watchAddPost() {
  yield takeEvery(UPPLOAD_POST_REQUEST, addPost);
}

// loaded post list

function loadedPostApi() {
  return axios.get('http://localhost:5000/upload/loaded', {
    withCredentials: true,
  });
}

function* loadedPost(action) {
  try {
    const result = yield call(loadedPostApi, action.data);
    yield put({
      type: LOAD_GALLERY_SUCCESS,
      data: result.data,
    });
  } catch (e) {
    console.log(e);
    yield put({
      type: LOAD_GALLERY_FAILURE,
    });
  }
}

function* watchloadedPost() {
  yield takeEvery(LOAD_GALLERY_REQUEST, loadedPost);
}

// 포스트 세부사항 로딩

function loadedPostDetailApi(urldata) {
  return axios.post('http://localhost:5000/upload/photodetail', urldata, {
    withCredentials: true,
  });
}

function* loadedPostDetail(action) {
  try {
    const result = yield call(loadedPostDetailApi, action.data);
    yield put({
      type: LOAD_PHOTO_DETAIL_SUCCESS,
      data: result.data,
    });
  } catch (e) {
    console.log(e);
    yield put({
      type: LOAD_PHOTO_DETAIL_FAILURE,
    });
  }
}

function* watchloadedPostDetail() {
  yield takeEvery(LOAD_PHOTO_DETAIL_REQUEST, loadedPostDetail);
}

// 포스트 에딧

function editPostDetailApi(urldata) {
  return axios.post('http://localhost:5000/upload/editpost', urldata, {
    withCredentials: true,
  });
}

function* editPostDetail(action) {
  try {
    const result = yield call(editPostDetailApi, action.data);
    yield put({
      type: EDIT_PHOTO_DETAIL_SUCCESS,
    });
  } catch (e) {
    console.log(e);
    yield put({
      type: EDIT_PHOTO_DETAIL_FAILURE,
    });
  }
}

function* watchEditPostDetail() {
  yield takeEvery(EDIT_PHOTO_DETAIL_REQUEST, editPostDetail);
}

export default function* drawingSaga() {
  yield all([
    fork(watchAddPhoto),
    fork(watchAddPost),
    fork(watchloadedPost),
    fork(watchloadedPostDetail),
    fork(watchEditPostDetail),
  ]);
}
