import {
  GET_JOBS,
  GET_JOB_DETAILS,
  SET_LOADING,
  JOBS_ERROR,
  JOB_ERROR,
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

export const jobReducer = (state = jobsInitialState, action) => {
  switch (action.type) {
    case GET_JOBS:
      return { ...state, jobs: action.payload, loading: false };
    case SET_LOADING:
      return { ...state, loading: true };
    case JOBS_ERROR:
      console.error(action.payload);
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export const jobDetailsReducer = (state = jobInitialState, action) => {
  switch (action.type) {
    case GET_JOB_DETAILS:
      return { ...state, job: action.payload, loading: false };
    case SET_LOADING:
      return { ...state, loading: true };
    case JOB_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
