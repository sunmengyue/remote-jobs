import {
  GET_JOBS_REQUEST,
  GET_JOBS_SUCCESS,
  GET_JOBS_FAIL,
  GET_JOB_DETAILS_REQUEST,
  GET_JOB_DETAILS_SUCCESS,
  GET_JOB_DETAILS_FAIL,
  SAVE_JOB_REQUEST,
  SAVE_JOB_SUCCESS,
  SAVE_JOB_FAIL,
  GET_SAVED_JOBS_REQUEST,
  GET_SAVED_JOBS_SUCCESS,
  GET_SAVED_JOBS_FAIL,
} from './types';
import jobs from '../apis/jobs';

// Get jobs from server
export const getJobs = () => async (dispatch) => {
  try {
    dispatch({ type: GET_JOBS_REQUEST });
    const { data } = await jobs.get('/jobs');
    dispatch({
      type: GET_JOBS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_JOBS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// Check job details
export const getJobDetails = (id) => async (dispatch) => {
  try {
    dispatch({
      type: GET_JOB_DETAILS_REQUEST,
    });
    const { data } = await jobs.get(`/jobs/${id}`);
    dispatch({
      type: GET_JOB_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_JOB_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// List Saved Jobs
export const getSavedJobs = () => async (dispatch) => {
  try {
    dispatch({ type: GET_SAVED_JOBS_REQUEST });
    const { data } = await jobs.get('/savedJobs');
    dispatch({
      type: GET_SAVED_JOBS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_SAVED_JOBS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// Save a job
export const saveJob = (job) => async (dispatch) => {
  try {
    dispatch({ type: SAVE_JOB_REQUEST });
    const { data } = await jobs.post(`/savedJobs/`, job);
    dispatch({ type: SAVE_JOB_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: SAVE_JOB_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
