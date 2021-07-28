import React, { useContext } from 'react';
import Jobcontext from '../utils/Jobcontext';
import AppliedJobItem from '../components/AppliedJobItem';

const AppliedJobs = () => {
  const jobData = useContext(Jobcontext);
  const { filteredSaves } = jobData;

  const listAppliedJobs = () => {
    return filteredSaves.map((job) => (
      <AppliedJobItem job={job} key={job.id} />
    ));
  };

  return <div className="page">{listAppliedJobs()}</div>;
};

export default AppliedJobs;
