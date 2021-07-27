import React, { useContext } from 'react';
import Jobcontext from '../utils/Jobcontext';
import Link from '../components/Link';
import '../css/JobDetails.css';

const JobDetails = () => {
  const jobdata = useContext(Jobcontext);
  const { jobs, savedJobs, setSavedJobs } = jobdata;
  const jobId = parseInt(
    window.location.pathname.substring(
      window.location.pathname.lastIndexOf('/') + 1,
    ),
  );
  const jobObj = jobs.find((job) => job.id === jobId);

  const saveJob = () => {};

  return (
    <div className="page">
      <Link className="toHome" to="/">
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
          <div className="action">
            <a
              className="apply"
              href={`${jobObj.url}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Apply
            </a>
            <Link className="save" to="/jobs/saved">
              <i className="fas fa-bookmark fa-lg"></i>Save
            </Link>
          </div>
        </div>
        <div className="jobinfo">
          <div className="jobinfo__header">
            <h2>{jobObj.title}</h2>
            <p>{jobObj.job_type}</p>
            <div className="post__time">
              <i className="fas fa-clock"></i>
              <p>{jobObj.publication_date.slice(0, 10)}</p>
            </div>
            <div className="logo">
              {jobObj.company_logo_url ? (
                <img
                  src={`${jobObj.company_logo_url}`}
                  alt="logo"
                  className="company__logo"
                />
              ) : (
                <i className="fas fa-building fa-3x"></i>
              )}
              <div className="job__companyInfo">
                <p className="job__companyName"> {jobObj.company_name}</p>
                <p className="job__companyLocation">
                  {jobObj.candidate_required_location}
                </p>
              </div>
            </div>
          </div>
          <div
            className="jobinfo__content"
            dangerouslySetInnerHTML={{ __html: jobObj.description }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
