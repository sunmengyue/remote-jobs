import { GET_JOBS, SET_LOADING, JOBS_ERROR } from './types';
import { dispatch } from 'redux-thunk';
import axios from 'axios';

// Get jobs from server
export const getJobs = () => async (dispatch) => {
  try {
    const { data } = await axios('http://localhost:5000/jobs/');

    dispatch({
      type: GET_JOBS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: JOBS_ERROR,
      payload: error.response.data,
    });
  }
};

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
