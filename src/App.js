import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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

  return (
    // <Router>
    //   <Jobcontext.Provider value={{ jobs }}>
    //     <Switch>
    //       <Route path="/" exact>
    //         <Home />
    //       </Route>
    //       <Route path="/jobs/:id" component={JobDetails} />
    //       <Route path="/jobs/save" exact component={Save} />
    //     </Switch>
    //   </Jobcontext.Provider>
    // </Router>
    <Jobcontext.Provider value={{ jobs }}>
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
