import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Jobcontext from './utils/Jobcontext';
import Home from './pages/Home';
import Save from './pages/Save';

const App = () => {
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    const res = await axios.get('https://remotive.io/api/remote-jobs?limit=20');
    setJobs(res.data.jobs);
  };

  const fetchCategory = async () => {
    const res = await axios.get(
      'https://remotive.io/api/remote-jobs/categories',
    );
  };

  useEffect(() => {
    fetchJobs();
    fetchCategory();
  });

  return (
    <Router>
      <Jobcontext.Provider value={{ jobs }}>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/jobs/save">
            <Save />
          </Route>
        </Switch>
      </Jobcontext.Provider>
    </Router>
  );
};

export default App;
