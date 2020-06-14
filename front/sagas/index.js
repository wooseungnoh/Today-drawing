import { all, call } from 'redux-saga/effects';
import user from './user';
import drawing from './drawing';
import admin from './admin';

export default function* rootSaga() {
  yield all([call(user), call(drawing), call(admin)]);
}
