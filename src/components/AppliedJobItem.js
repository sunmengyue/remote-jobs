import React, { useContext } from 'react';
import Jobcontext from '../utils/Jobcontext';
import Link from './Link';

const AppliedJobItem = ({ job }) => {
  const jobData = useContext(Jobcontext);
  const { deleteSaved } = jobData;

  return (
    <div className="job">
      <div className="job__content">
        {job.company_logo ? (
          <img
            src={`${job.company_logo}`}
            alt="logo"
            className="company__logo"
          />
        ) : (
          <i className="fas fa-building fa-4x"></i>
        )}
        <div className="job__info">
          <Link to={`/jobs/${job.id}`}>
            <h4 className="title">{job.position}</h4>
          </Link>
          <p className="company__name">{job.company}</p>
          <p className="job__tag">{job.location}</p>
        </div>
      </div>
      <div className="post__time">
        <i className="fas fa-clock"></i>
        {job.date.slice(0, 10)}
      </div>
      <div className="job__action">
        <p
          onClick={() => {
            deleteSaved(job.id);
          }}
        >
          ✕
        </p>
      </div>
    </div>
  );
};

export default AppliedJobItem;
