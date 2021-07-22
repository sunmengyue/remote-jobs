import React from 'react';
import Link from '../components/Link';
import '../css/MyJobsHeader.css';

const MyJobsHeader = () => {
  return (
    <div className="page myJobs__header">
      <Link className="toHome" to="/">
        <h1>
          Remote <span>Optimal</span>
        </h1>
      </Link>
      <Link className="back" to="/">
        <i className="fas fa-arrow-circle-left"></i>
        <p>back to search</p>
      </Link>
      <h2 className="myJobs">My Jobs</h2>
      <nav>
        <ul className="saved__list">
          <Link className="list__item" to="/jobs/saved">
            Saved
          </Link>
          <Link className="list__item" to="/jobs/applied">
            Applied
          </Link>
          <Link className="list__item" to="/jobs/archived">
            Archived
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default MyJobsHeader;
