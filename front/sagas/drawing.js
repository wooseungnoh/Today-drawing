import { all, delay, fork, put, takeEvery, call } from 'redux-saga/effects';
import axios from 'axios';

import {
  UPPLOAD_CANVAS_REQUEST,
  UPPLOAD_CANVAS_SUCCESS,
  UPPLOAD_CANVAS_FAILURE,
} from '../reducers/drawing';

function addPhotoApi(photoData) {
  return axios.post('http://localhost:5000/upload/uploadphoto', photoData, {
    withCredentials: true,
  });
}

function* addPhoto(action) {
  try {
    const result = yield call(addPhotoApi, action.data);
    console.log(result.data)
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

export default function* drawingSaga() {
  yield all([fork(watchAddPhoto)]);
}
