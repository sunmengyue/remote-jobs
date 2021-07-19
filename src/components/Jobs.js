import React, { useContext } from 'react';
import Jobcontext from '../utils/Jobcontext';

const Jobs = () => {
  const jobdata = useContext(Jobcontext);
  const listJobs = () => jobdata.jobs.map((job) => job.title);

  return <div> {listJobs()} </div>;
};

export default Jobs;
