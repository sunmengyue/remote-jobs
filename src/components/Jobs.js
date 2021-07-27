import React, { useContext } from 'react';
import Jobcontext from '../utils/Jobcontext';
import Job from './Job';
import Link from './Link';

import Page from './Page';
import '../css/Jobs.css';

const Jobs = () => {
  const jobdata = useContext(Jobcontext);
  const { currentPosts } = jobdata;

  const listJobs = () =>
    currentPosts.map((job) => <Job job={job} key={job.id} />);
  return (
    <div className="jobs">
      <Link to="/jobs/saved" className="saved__jobs">
        <h3> My Saved Jobs</h3>
        <i class="fas fa-book-open fa-2x"></i>
      </Link>
      <div className="job__list">{listJobs()}</div>
      <Page />
    </div>
  );
};

export default Jobs;
