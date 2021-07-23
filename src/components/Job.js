import React, { useContext } from 'react';
import '../css/Job.css';
import Jobcontext from '../utils/Jobcontext';

const Job = ({ job }) => {
  const jobData = useContext(Jobcontext);
  const { popState } = jobData;

  const onClickRedirect = (e) => {
    if (e.metaKey || e.ctrlKey) {
      return;
    } // if cmd or ctrl, do not run code below, open a new tab

    e.preventDefault();
    window.history.pushState({}, '', `/jobs/${job.id}`);
    popState();
  };

  return (
    <div className="job" onClick={onClickRedirect}>
      <div className="job__content">
        {job.company_logo_url ? (
          <img
            src={`${job.company_logo_url}`}
            alt="logo"
            className="company__logo"
          />
        ) : (
          <i className="fas fa-building fa-4x"></i>
        )}

        <div className="job__info">
          <h4 className="title">{job.title}</h4>
          <p className="company__name">{job.company_name}</p>
          <p className="job__tag">{job.candidate_required_location}</p>
          <p className="job__tag">{job.salary}</p>
        </div>
      </div>
      <div className="job__category">
        <p className="job__tag">{job.category}</p>
        <p className="job__tag">{job.job_type}</p>
      </div>
      <div className="post__time">
        <i className="fas fa-clock"></i>
        {job.publication_date.slice(0, 10)}
      </div>
    </div>
  );
};

export default Job;
