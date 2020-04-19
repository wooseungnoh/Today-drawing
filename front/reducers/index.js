import { combineReducers } from 'redux';
import drawing from './drawing';
import user from './user';

const rootReducer = combineReducers({
  drawing,
  user,
});

export default rootReducer;
