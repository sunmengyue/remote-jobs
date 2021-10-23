import { GET_JOBS, SET_LOADING, JOBS_ERROR } from '../actions/types';
const initialState = {
  jobs: [],
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
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
