import React, { useContext } from 'react';
import Jobcontext from '../utils/Jobcontext';
import Job from './Job';
import Loader from './Loader';
import Page from './Page';
import '../css/Jobs.css';

const Jobs = () => {
  const jobdata = useContext(Jobcontext);
  const { loading, currentPosts } = jobdata;

  const listJobs = () =>
    currentPosts.map((job) => <Job job={job} key={job.id} />);

  if (loading) {
    return (
      <div className="jobs">
        <Loader />
      </div>
    );
  }
  return (
    <div className="jobs">
      <div className="job__list">{listJobs()}</div>
      <Page />
    </div>
  );
};

export default Jobs;
