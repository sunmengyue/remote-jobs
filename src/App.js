import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Jobcontext from './utils/Jobcontext';
import Jobs from './components/Jobs';
import Header from './components/Header';
import './css/App.css';

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
    <Jobcontext.Provider value={{ jobs }}>
      <div className="App">
        <Header />
        <Jobs />
      </div>
    </Jobcontext.Provider>
  );
};

export default App;
