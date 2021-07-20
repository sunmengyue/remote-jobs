import React from 'react';
import '../css/Job.css';

const Job = ({ job }) => {
  return (
    <div className="job">
      <div className="job__content">
        <img src={`${job.company_logo_url}`} alt="logo" />
        <div className="job__info">
          <h5 className="title">{job.title}</h5>
          <p className="company__name">{job.company_name}</p>
          <p className="job__tag">{job.candidate_required_location}</p>
          <p className="job__tag">{job.salary}</p>
        </div>
      </div>
      <div className="job__category">
        <p>{job.category}</p>
        <p className="job__tag">{job.job_type}</p>
      </div>
      <div className="post__time">{job.publication_date}</div>
    </div>
  );
};

export default Job;
