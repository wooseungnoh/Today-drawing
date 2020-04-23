import { all, call } from 'redux-saga/effects';
import user from './user';
import drawing from './drawing';

export default function* rootSaga() {
  yield all([call(user), call(drawing)]);
}
