import {
  GET_JOBS,
  SET_LOADING,
  JOBS_ERROR,
  GET_JOB_DETAILS,
  JOB_ERROR,
} from './types';
import jobs from '../apis/jobs';
import { dispatch } from 'redux-thunk';

// Get jobs from server
export const getJobs = () => async (dispatch) => {
  try {
    setLoading();
    const { data } = await jobs.get('/jobs');
    dispatch({
      type: GET_JOBS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: JOBS_ERROR,
      payload: error.response,
    });
  }
};

export const getJobDetails = (id) => async (dispatch) => {
  try {
    setLoading();
    const { data } = await jobs.get(`/jobs/${id}`);
    dispatch({
      type: GET_JOB_DETAILS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: JOB_ERROR,
      payload: error.response.data,
    });
  }
};

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
