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
  LOAD_POST_DETAIL_FAILURE,
  LOAD_POST_DETAIL_SUCCESS,
  LOAD_POST_DETAIL_REQUEST,
  EDIT_POST_DETAIL_SUCCESS,
  EDIT_POST_DETAIL_FAILURE,
  EDIT_POST_DETAIL_REQUEST,
  DELETE_POST_SUCCESS,
  DELETE_POST_FAILURE,
  DELETE_POST_REQUEST,
  LIKE_SUCCESS,
  LIKE_FAILURE,
  LIKE_REQUEST,
  UNLIKE_REQUEST,
  UNLIKE_FAILURE,
  UNLIKE_SUCCESS,
  WORD_UPDATE_SUCCESS,
  WORD_UPDATE_FAILURE,
  WORD_UPDATE_REQUEST,
  ADD_WORD,
  LOAD_ALLGALLERY_SUCCESS,
  LOAD_ALLGALLERY_FAILURE,
  LOAD_ALLGALLERY_REQUEST,
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
    const result = yield call(loadedPostApi);
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

// loaded all post list

function loadedAllPostApi() {
  return axios.get('http://localhost:5000/upload/allloaded', {
    withCredentials: true,
  });
}

function* loadedAllPost() {
  try {
    const result = yield call(loadedAllPostApi);
    yield put({
      type: LOAD_ALLGALLERY_SUCCESS,
      data: result.data,
    });
  } catch (e) {
    console.log(e);
    yield put({
      type: LOAD_ALLGALLERY_FAILURE,
    });
  }
}

function* watchloadedAllPost() {
  yield takeEvery(LOAD_ALLGALLERY_REQUEST, loadedAllPost);
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
      type: LOAD_POST_DETAIL_SUCCESS,
      data: result.data,
    });
  } catch (e) {
    console.log(e);
    yield put({
      type: LOAD_POST_DETAIL_FAILURE,
    });
  }
}

function* watchloadedPostDetail() {
  yield takeEvery(LOAD_POST_DETAIL_REQUEST, loadedPostDetail);
}

// 포스트 에딧

function editPostDetailApi(urldata) {
  return axios.post('http://localhost:5000/upload/editpost', urldata, {
    withCredentials: true,
  });
}

function* editPostDetail(action) {
  try {
    yield call(editPostDetailApi, action.data);
    yield put({
      type: EDIT_POST_DETAIL_SUCCESS,
    });
  } catch (e) {
    console.log(e);
    yield put({
      type: EDIT_POST_DETAIL_FAILURE,
    });
  }
}

function* watchEditPostDetail() {
  yield takeEvery(EDIT_POST_DETAIL_REQUEST, editPostDetail);
}

// 포스트 지우기

function deletePostApi(targetPostData) {
  return axios.post('http://localhost:5000/upload/deletepost', targetPostData, {
    withCredentials: true,
  });
}

function* deletePost(action) {
  try {
    yield call(deletePostApi, action.data);
    yield put({
      type: DELETE_POST_SUCCESS,
    });
  } catch (e) {
    console.log(e);
    yield put({
      type: DELETE_POST_FAILURE,
    });
  }
}

function* watchDeletePost() {
  yield takeEvery(DELETE_POST_REQUEST, deletePost);
}

// 좋아요

function likeApi(id) {
  return axios.post('http://localhost:5000/upload/like', id, {
    withCredentials: true,
  });
}

function* like(action) {
  try {
    const result = yield call(likeApi, action.data);
    yield put({
      type: LIKE_SUCCESS,
      data: result.data,
    });
  } catch (e) {
    console.log(e);
    yield put({
      type: LIKE_FAILURE,
    });
  }
}

function* watchlike() {
  yield takeEvery(LIKE_REQUEST, like);
}

// 좋아요취소

function unlikeApi(id) {
  return axios.post('http://localhost:5000/upload/unlike', id, {
    withCredentials: true,
  });
}

function* unlike(action) {
  try {
    const result = yield call(unlikeApi, action.data);
    yield put({
      type: UNLIKE_SUCCESS,
      data: result.data,
    });
  } catch (e) {
    console.log(e);
    yield put({
      type: UNLIKE_FAILURE,
    });
  }
}

function* watchUnlike() {
  yield takeEvery(UNLIKE_REQUEST, unlike);
}


// loaded word

function loadedWordApi() {
  return axios.get('http://localhost:5000/upload/loadword');
}

function* loadedWord() {
  try {
    const result = yield call(loadedWordApi);
    yield put({
      type: WORD_UPDATE_SUCCESS,
      data: result.data,
    });
  } catch (e) {
    console.log(e);
    yield put({
      type: WORD_UPDATE_FAILURE,
    });
  }
}

function* watchloadedWord() {
  yield takeEvery(WORD_UPDATE_REQUEST, loadedWord);
}

export default function* drawingSaga() {
  yield all([
    fork(watchAddPhoto),
    fork(watchAddPost),
    fork(watchloadedPost),
    fork(watchloadedPostDetail),
    fork(watchEditPostDetail),
    fork(watchDeletePost),
    fork(watchlike),
    fork(watchUnlike),
    fork(watchloadedWord),
    fork(watchloadedAllPost)
  ]);
}
