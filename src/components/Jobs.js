import React, { useContext } from 'react';
import Jobcontext from '../utils/Jobcontext';
import Job from './Job';
import Page from './Page';
import '../css/Jobs.css';

const Jobs = () => {
  const jobdata = useContext(Jobcontext);
  const { loading, currentPosts } = jobdata;

  if (loading) {
    return <h2>loading...</h2>;
  }
  const listJobs = () =>
    currentPosts.map((job) => <Job job={job} key={job.id} />);

  return (
    <div className="jobs">
      <div className="job__list">{listJobs()}</div>
      <Page />
    </div>
  );
};

export default Jobs;
