import React from 'react';
import '../css/Job.css';
import { v4 as uuidv4 } from 'uuid';

const Job = ({ job }) => {
  return (
    <div className="job">
      <div className="job__content">
        {job.logo ? (
          <img src={`${job.logo}`} alt="logo" className="company__logo" />
        ) : (
          <i className="fas fa-building fa-4x"></i>
        )}

        <div className="job__info">
          <h4 className="title">{job.position}</h4>
          <p className="company__name">{job.company}</p>
          <p className="job__tag">{job.location}</p>
        </div>
      </div>
      <div className="job__category">
        {job.tags &&
          job.tags.map((tag) => (
            <p className="job__tag" key={uuidv4()}>
              {tag}
            </p>
          ))}
      </div>
      <div className="post__time">
        <i className="fas fa-clock"></i>
        {job.date.substring(0, 10)}
      </div>
    </div>
  );
};

export default Job;
