import {
  GET_JOBS_REQUEST,
  GET_JOBS_SUCCESS,
  GET_JOBS_FAIL,
  GET_JOB_DETAILS_REQUEST,
  GET_JOB_DETAILS_SUCCESS,
  GET_JOB_DETAILS_FAIL,
} from '../actions/types';

const jobsInitialState = {
  jobs: [],
  loading: false,
  error: null,
};

const jobInitialState = {
  job: {},
  loading: false,
  error: null,
};

export const jobListReducer = (state = jobsInitialState, action) => {
  switch (action.type) {
    case GET_JOBS_REQUEST:
      return { ...state, loading: true };
    case GET_JOBS_SUCCESS:
      return { ...state, jobs: action.payload, loading: false };
    case GET_JOBS_FAIL:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export const jobDetailsReducer = (state = jobInitialState, action) => {
  switch (action.type) {
    case GET_JOB_DETAILS_REQUEST:
      return { ...state, loading: true };
    case GET_JOB_DETAILS_SUCCESS:
      return { ...state, job: action.payload, loading: false };
    case GET_JOB_DETAILS_FAIL:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
