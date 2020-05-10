import { combineReducers } from 'redux';
import user from './user';
import drawing from './drawing';

const rootReducer = combineReducers({
  user,
  drawing,
});

export default rootReducer;
