import React from 'react';
import Link from '../components/Link';
import '../css/SavedJobs.css';

const SavedJobs = () => {
  return (
    <div className="page">
      <h1>My Jobs</h1>
      <nav>
        <ul className="saved__list">
          <Link className="list__item">Saved</Link>
          <Link className="list__item">Applied</Link>
          <Link className="list__item">Archived</Link>
        </ul>
      </nav>
    </div>
  );
};

export default SavedJobs;
