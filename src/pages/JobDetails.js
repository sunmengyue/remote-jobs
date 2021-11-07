import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getJobDetails, saveJob, unSaveJob } from '../actions/jobActions';
import '../css/JobDetails.css';
import logo from '../images/remote_optimal_logo.png';

const JobDetails = ({
  match,
  jobDetails: { job, loading },
  savedJobList: { savedJobs },
  getJobDetails,
  saveJob,
  unSaveJob,
}) => {
  useEffect(() => {
    getJobDetails(match.params.id);
  }, [match]);

  // const saveJob = (id) => {
  //   if (!savedJobs.find((job) => job.id === id)) {
  //     setSavedJobs([...savedJobs, { ...jobDetails.job, isApplied: false }]);
  //   }
  //   if (savedJobs.find((job) => job.id === id)) {
  //     setSavedJobs(() => {
  //       return savedJobs.filter((job) => job.id !== jobId);
  //     });
  //   }
  // };

  const toggleSave = () => {
    if (!savedJobs.find((savedJob) => savedJob.id === job.id)) {
      saveJob({ ...job, isApplied: false });
    } else {
      unSaveJob(job.id);
    }
  };

  return (
    <div className="page">
      <Link className="toHome" to="/">
        <img src={logo} alt="logo" />
        <h1>
          Remote <span>Optimal</span>
        </h1>
      </Link>
      <div className="job__details">
        <div className="control">
          <Link className="back" to="/">
            <i className="fas fa-arrow-circle-left"></i>
            <p>back to search</p>
          </Link>
          <Link to="/savedJobs" className="saved__jobs">
            {savedJobs.length ? (
              <i className="fas fa-folder fa-2x"></i>
            ) : (
              <i className="far fa-folder fa-2x"></i>
            )}
            <h3> My Saved Jobs : {savedJobs.length} </h3>
          </Link>

          <div className="action">
            <a
              className="apply"
              href={`${job?.url}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Apply
            </a>
            <button
              className="save"
              to="/savedJobs"
              onClick={toggleSave}
              style={
                savedJobs.find((savedJob) => savedJob.id === job.id)
                  ? { color: '#de3163' }
                  : { color: '#003d80' }
              }
            >
              <i className="fas fa-bookmark fa-lg"></i>
              {savedJobs.find((savedJob) => savedJob.id === job.id)
                ? 'Saved'
                : 'Save'}
            </button>
          </div>
        </div>
        <div className="jobinfo">
          <div className="jobinfo__header">
            <h2>{job?.position}</h2>
            <div className="post__time">
              <i className="fas fa-clock"></i>
              <p>{job?.date?.slice(0, 10)}</p>
            </div>
            <div className="logo">
              {job?.company_logo ? (
                <img
                  src={`${job?.company_logo}`}
                  alt="logo"
                  className="company__logo"
                />
              ) : (
                <i className="fas fa-building fa-3x"></i>
              )}
              <div className="job__companyInfo">
                <p className="job__companyName"> {job?.company}</p>
                <p className="job__companyLocation">{job?.location}</p>
              </div>
            </div>
          </div>
          <div
            className="jobinfo__content"
            dangerouslySetInnerHTML={{ __html: job?.description }}
          ></div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    jobDetails: state.jobDetails,
    savedJobList: state.savedJobList,
  };
};

export default connect(mapStateToProps, { getJobDetails, saveJob, unSaveJob })(
  JobDetails,
);
