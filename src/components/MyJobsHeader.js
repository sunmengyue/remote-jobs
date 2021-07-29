import React, { useRef, useEffect } from 'react';
import Link from '../components/Link';
import '../css/MyJobsHeader.css';

const MyJobsHeader = () => {
  const savedRef = useRef();
  const appliedRef = useRef();

  useEffect(() => {
    if (window.location.pathname === '/jobs/saved') {
      savedRef.current.children[0].style.color = '#0d6efd';
    } else if (window.location.pathname === '/jobs/applied') {
      appliedRef.current.children[0].style.color = '#0d6efd';
    }
  }, []);

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
          <li className="list__item" ref={savedRef}>
            <Link to="/jobs/saved">Saved</Link>
          </li>
          <li className="list__item" ref={appliedRef}>
            <Link to="/jobs/applied">Applied</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MyJobsHeader;
