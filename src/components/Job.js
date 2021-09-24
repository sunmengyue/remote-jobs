import React, { useContext } from 'react';
import '../css/Job.css';
import Jobcontext from '../utils/Jobcontext';
import { v4 as uuidv4 } from 'uuid';

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
