import { combineReducers } from 'redux';
import user from './user';
import drawing from './drawing';
import admin from './admin';

const rootReducer = combineReducers({
  user,
  drawing,
  admin,
});

export default rootReducer;
