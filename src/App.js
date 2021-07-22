import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Route from './components/Route';
import Jobcontext from './utils/Jobcontext';
import Home from './pages/Home';
import Save from './pages/Save';
import JobDetails from './pages/JobDetails';

const App = () => {
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    const res = await axios.get('https://remotive.io/api/remote-jobs?limit=10');
    setJobs(res.data.jobs);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const popState = () => {
    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  };

  return (
    <Jobcontext.Provider value={{ jobs, popState }}>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/save">
        <Save />
      </Route>
      {jobs.map((job) => (
        <Route path={`/jobs/${job.id}`} key={job.id}>
          <JobDetails />
        </Route>
      ))}
    </Jobcontext.Provider>
  );
};

export default App;
