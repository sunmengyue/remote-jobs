import React, { useContext } from 'react';
import Jobcontext from '../utils/Jobcontext';
import Link from '../components/Link';
import '../css/MyJobsHeader.css';

const MyJobsHeader = () => {
  const jobData = useContext(Jobcontext);
  const { setTypeOfSaves } = jobData;

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
          <li className="list__item" onClick={() => setTypeOfSaves('Saved')}>
            <Link to="/jobs/saved">Saved</Link>
          </li>
          <li className="list__item" onClick={() => setTypeOfSaves('Applied')}>
            <Link to="/jobs/applied">Applied</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MyJobsHeader;
