import { all, call } from 'redux-saga/effects';
import user from './user';
import drawing from './drawing';
import admin from './admin';
import Axios from 'axios';

Axios.defaults.baseURL = `${
  process.env.NODE_ENV === 'production' ? '' : 'http://localhost:5000'
}`;

export default function* rootSaga() {
  yield all([call(user), call(drawing), call(admin)]);
}
