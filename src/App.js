import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Route from './components/Route';
import Jobcontext from './utils/Jobcontext';
import Home from './pages/Home';
import MyJobsHeader from './components/MyJobsHeader';
import SavedJobs from './pages/SavedJobs';
import AppliedJobs from './pages/AppliedJobs';
import JobDetails from './pages/JobDetails';
import Login from './pages/Login';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState([1, 2, 3]);
  const [postsPerPage] = useState(15);
  const [params, setParams] = useState({});
  const [input, setInput] = useState('');
  const initialSaves = JSON.parse(localStorage.getItem('jobs')) || [];
  const [savedJobs, setSavedJobs] = useState(initialSaves);

  const [user, loading] = useAuthState(auth);

  // fetch data
  useEffect(() => {
    const cancelToken = axios.CancelToken.source();
    axios
      .get('https://remotive.io/api/remote-jobs', {
        cancelToken: cancelToken.token,
        params: { ...params, limit: 1000 },
      })
      .then((res) => {
        setJobs(res.data.jobs);
      })
      .catch((error) => {
        console.log(error);
      });
    return () => {
      cancelToken.cancel();
    };
  }, [params, currentPage]);

  // pagination
  const lastPostIdx = currentPage * postsPerPage;
  const firstPostIdx = lastPostIdx - postsPerPage;
  const currentPosts = jobs.slice(firstPostIdx, lastPostIdx);

  // create a url change event for the router, getting called in the link component
  const popState = () => {
    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  };

  // For the 3rd page mark as applied button
  const markAsApplied = (id) => {
    const updatedSavedJobs = savedJobs.map((job) =>
      job.id === id ? { ...job, isApplied: true } : job,
    );
    setSavedJobs(updatedSavedJobs);
  };

  // For the 3rd page delete button
  const deleteSaved = (id) => {
    const updatedSavedJobs = savedJobs.filter((job) => job.id !== id);
    setSavedJobs(updatedSavedJobs);
  };

  // save to local storage
  const saveToLocal = () => {
    localStorage.setItem('jobs', JSON.stringify(savedJobs));
  };

  useEffect(() => {
    saveToLocal();
    //eslint-disable-next-line
  }, [savedJobs]);

  return (
    <Jobcontext.Provider
      value={{
        jobs,
        setJobs,
        popState,
        params,
        setParams,
        currentPosts,
        postsPerPage,
        currentPage,
        setCurrentPage,
        pages,
        setPages,
        savedJobs,
        setSavedJobs,
        input,
        setInput,
        markAsApplied,
        deleteSaved,
        saveToLocal,
      }}
    >
      {!user ? (
        <Login />
      ) : (
        <>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/jobs/saved">
            <MyJobsHeader />
            <SavedJobs />
          </Route>
          <Route path="/jobs/applied">
            <MyJobsHeader />
            <AppliedJobs />
          </Route>
          {jobs.map((job) => (
            <Route path={`/jobs/${job.id}`} key={job.id}>
              <JobDetails />
            </Route>
          ))}
        </>
      )}
    </Jobcontext.Provider>
  );
};

export default App;
