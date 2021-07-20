import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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

  return (
    <Router>
      <Jobcontext.Provider value={{ jobs }}>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/jobs/:id" render={(props) => <JobDetails />} />

          <Route path="/jobs/save">
            <Save />
          </Route>
        </Switch>
      </Jobcontext.Provider>
    </Router>
  );
};

export default App;
