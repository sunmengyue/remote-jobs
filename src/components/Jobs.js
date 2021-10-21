import React, { useContext } from 'react';
import Link from './Link';
import Jobcontext from '../utils/Jobcontext';
import Job from './Job';
import Page from './Page';
import '../css/Jobs.css';

const Jobs = () => {
  const jobdata = useContext(Jobcontext);
  const { currentPosts, savedJobs } = jobdata;

  const redirectProtected = () => {
    if (user) {
      return (
        <Link to="/jobs/saved" className="saved__jobs">
          {savedJobs.length ? (
            <i className="fas fa-folder fa-2x"></i>
          ) : (
            <i className="far fa-folder fa-2x"></i>
          )}
          <h3> My Saved Jobs : {savedJobs.length} </h3>
        </Link>
      );
    } else {
      return (
        <Link to="/login" className="saved__jobs">
          {savedJobs.length ? (
            <i className="fas fa-folder fa-2x"></i>
          ) : (
            <i className="far fa-folder fa-2x"></i>
          )}
          <h3> My Saved Jobs : {savedJobs.length} </h3>
        </Link>
      );
    }
  };

  const listJobs = () =>
    currentPosts.map((job) => <Job job={job} key={job.id} />);
  return (
    <div className="jobs">
      <Link to="/jobs/saved" className="saved__jobs">
        {savedJobs.length ? (
          <i className="fas fa-folder fa-2x"></i>
        ) : (
          <i className="far fa-folder fa-2x"></i>
        )}
        <h3> My Saved Jobs : {savedJobs.length} </h3>
      </Link>
      <div className="job__list">{listJobs()}</div>
      <Page />
    </div>
  );
};

export default Jobs;
