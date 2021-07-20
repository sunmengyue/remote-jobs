import React, { useHistory } from 'react';
import '../css/Job.css';

const Job = ({ job }) => {
  // const onClickRedirect = () => {
  //   history.push(`/jobs/${id}`);
  // };

  return (
    <div className="job">
      <div className="job__content">
        <img src={`${job.company_logo_url}`} alt="logo" />
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
