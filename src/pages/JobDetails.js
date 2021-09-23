import React, { useContext } from 'react';
import Jobcontext from '../utils/Jobcontext';
import Link from '../components/Link';
import '../css/JobDetails.css';
import logo from '../images/remote_optimal_logo.png';

const JobDetails = () => {
  const jobdata = useContext(Jobcontext);
  const { jobs, savedJobs, setSavedJobs } = jobdata;

  const jobId = window.location.pathname.substring(
    window.location.pathname.lastIndexOf('/') + 1,
  );
  const jobObj = jobs.find((job) => job.id === jobId);

  const saveJob = (id) => {
    if (!savedJobs.find((job) => job.id === id)) {
      setSavedJobs([...savedJobs, { ...jobObj, isApplied: false }]);
    }
    if (savedJobs.find((job) => job.id === id)) {
      setSavedJobs(() => {
        return savedJobs.filter((job) => job.id !== jobId);
      });
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
          <Link to="/jobs/saved" className="saved__jobs">
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
              href={`${jobObj.apply_url}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Apply
            </a>
            <button
              className="save"
              to="/jobs/saved"
              onClick={() => {
                saveJob(jobObj.id);
              }}
              style={
                savedJobs.find((job) => job.id === jobObj.id)
                  ? { color: '#de3163' }
                  : { color: '#003d80' }
              }
            >
              <i className="fas fa-bookmark fa-lg"></i>
              {savedJobs.find((job) => job.id === jobObj.id) ? 'Saved' : 'Save'}
            </button>
          </div>
        </div>
        <div className="jobinfo">
          <div className="jobinfo__header">
            <h2>{jobObj.position}</h2>
            <div className="job__category">
              {jobObj.tags &&
                jobObj.tags.map((tag, idx) => (
                  <p className="job__tag" key={idx}>
                    {tag}
                  </p>
                ))}
            </div>
            <div className="post__time">
              <i className="fas fa-clock"></i>
              <p>{jobObj.date.slice(0, 10)}</p>
            </div>
            <p className="job__companyLocation">{jobObj.location}</p>
            <div className="logo">
              {jobObj.company_logo ? (
                <div className="logo__container">
                  <img
                    src={`${jobObj.company_logo}`}
                    alt="logo"
                    className="company__logo"
                  />
                </div>
              ) : (
                <i className="fas fa-building fa-3x"></i>
              )}
            </div>
            <p className="job__companyName">
              <a href={jobObj.url}>{jobObj.company}</a>
            </p>
          </div>
          <div className="jobinfo__content">{jobObj.description}</div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
