import React, { useContext } from 'react';
import Jobcontext from '../utils/Jobcontext';

const JobDetails = ({ path }) => {
  const jobdata = useContext(Jobcontext);
  const { jobs } = jobdata;
  const jobId = window.location.pathname.substring(
    window.location.pathname.lastIndexOf('/') + 1,
  );
  const jobObj = jobs.find((job) => job.id == jobId);

  return <h1>{jobObj.title}</h1>;
};

export default JobDetails;
