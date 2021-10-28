import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getJobs } from '../actions/jobActions';
import Job from './Job';
import Page from './Page';
import '../css/Jobs.css';

const Jobs = ({ job: { jobs, loading }, getJobs }) => {
  useEffect(() => {
    getJobs();
  }, []);

  const listJobs = () =>
    jobs.slice(1).map((job) => <Job job={job} key={job.id} />);

  if (loading || jobs === []) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="jobs">
      {/* <Link to="/jobs/saved" className="saved__jobs">
        {savedJobs.length ? (
          <i className="fas fa-folder fa-2x"></i>
        ) : (
          <i className="far fa-folder fa-2x"></i>
        )}
        <h3> My Saved Jobs : {savedJobs.length} </h3>
      </Link> */}
      <div className="job__list">{listJobs()}</div>
      <Page />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    job: state.job,
  };
};

export default connect(mapStateToProps, { getJobs })(Jobs);
