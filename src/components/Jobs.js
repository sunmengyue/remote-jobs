import React, { useContext } from 'react';
import Jobcontext from '../utils/Jobcontext';
import Job from './Job';
import '../css/Jobs.css';

const Jobs = () => {
  const jobdata = useContext(Jobcontext);

  const listJobs = () =>
    jobdata.jobs.map((job) => <Job job={job} key={job.id} />);

  return <div className="jobs"> {listJobs()} </div>;
};

export default Jobs;
