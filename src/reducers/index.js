import { combineReducers } from 'redux';
import { jobListReducer, jobDetailsReducer } from './jobReducer';
import savedJobReducer from './savedJobsReducer';

export default combineReducers({
  jobList: jobListReducer,
  jobDetails: jobDetailsReducer,
  savedJobList: savedJobReducer,
});
