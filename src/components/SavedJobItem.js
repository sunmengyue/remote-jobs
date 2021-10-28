import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../css/SavedJobItem.css';

const SavedJobItem = ({ job }) => {
  // const { markAsApplied, deleteSaved } = jobData;

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
        {job.date.substring(0, 10)}
      </div>
      <div className="job__action">
        <a
          href={job.apply_url}
          className="job__step job__step__first"
          target="_blank"
          rel="noreferrer"
        >
          Apply Now
        </a>
        <button
          className="job__step job__step__second"
          onClick={() => {
            markAsApplied(job.id);
          }}
        >
          Mark as applied
        </button>
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

export default SavedJobItem;
