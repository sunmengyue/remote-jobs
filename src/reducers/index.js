import { combineReducers } from 'redux';
import { jobReducer, jobDetailsReducer } from './jobReducer';

export default combineReducers({
  job: jobReducer,
  jobDetails: jobDetailsReducer,
});
