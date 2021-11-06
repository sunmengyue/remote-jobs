import {
  SAVE_JOB_REQUEST,
  SAVE_JOB_SUCCESS,
  SAVE_JOB_FAIL,
  GET_SAVED_JOBS_REQUEST,
  GET_SAVED_JOBS_SUCCESS,
  GET_SAVED_JOBS_FAIL,
} from '../actions/types';

const savedJobInitialState = {
  savedJobs: [],
  loading: false,
  error: null,
};

export default (state = savedJobInitialState, action) => {
  switch (action.type) {
    case SAVE_JOB_REQUEST:
      return { ...state, loading: true };
    case SAVE_JOB_SUCCESS:
      return {
        ...state,
        savedJobs: [...state.savedJobs, action.payload],
        loading: false,
      };
    case SAVE_JOB_FAIL:
      return { ...state, error: action.payload };
    case GET_SAVED_JOBS_REQUEST:
      return { ...state, loading: true };
    case GET_SAVED_JOBS_SUCCESS:
      return { ...state, savedJobs: action.payload, loading: false };
    case GET_SAVED_JOBS_FAIL:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
