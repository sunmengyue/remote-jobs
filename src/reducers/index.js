import { combineReducers } from 'redux';
import jobReducer from './jobReducer';

export default combineReducers({
  job: jobReducer,
});
