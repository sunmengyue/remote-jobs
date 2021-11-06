import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getJobs } from '../actions/jobActions';
import Job from './Job';
import Page from './Page';
import '../css/Jobs.css';

const Jobs = ({
  jobList: { jobs, loading },
  savedJobList: { savedJobs },
  getJobs,
}) => {
  useEffect(() => {
    getJobs();
  }, []);

  const listJobs = () => {
    if (loading || jobs === []) {
      return <h1>Loading...</h1>;
    }
    return jobs.slice(1).map((job) => <Job job={job} key={job.id} />);
  };

  return (
    <div className="jobs">
      <Link to="/savedJobs" className="saved__jobs">
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

const mapStateToProps = (state) => {
  return {
    jobList: state.jobList,
    savedJobList: state.savedJobList,
  };
};

export default connect(mapStateToProps, { getJobs })(Jobs);
