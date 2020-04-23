import { all, delay, fork, put, takeEvery } from 'redux-saga/effects';

import {
  UPPLOAD_CANVAS_REQUEST,
  UPPLOAD_CANVAS_SUCCESS,
  UPPLOAD_CANVAS_FAILURE,
} from '../reducers/drawing';

function addPhotoApi() {}

function* addPhoto() {
  try {
    yield delay(2000);
    yield put({
      type: UPPLOAD_CANVAS_SUCCESS,
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
