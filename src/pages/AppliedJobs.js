import React, { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Jobcontext from '../utils/Jobcontext';
import AppliedJobItem from '../components/AppliedJobItem';

const AppliedJobs = () => {
  const jobData = useContext(Jobcontext);
  const { savedJobs } = jobData;

  const listAppliedJobs = () => {
    return savedJobs.map((job) => (
      <>{job.isApplied && <AppliedJobItem job={job} key={uuidv4()} />}</>
    ));
  };

  return <div className="page">{listAppliedJobs()}</div>;
};

export default AppliedJobs;
