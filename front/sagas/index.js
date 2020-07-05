import { all, call } from 'redux-saga/effects';
import user from './user';
import drawing from './drawing';
import admin from './admin';
import axios from 'axios';

const backUrl = process.env.NODE_ENV === 'production' ? 'http://api.todaydrawing.net' : 'http://localhost:5000'
axios.defaults.baseURL = `${backUrl}`;

export default function* rootSaga() {
  yield all([call(user), call(drawing), call(admin)]);
}
