import React, { useContext } from 'react';
import Jobcontext from '../utils/Jobcontext';
import Link from './Link';
import '../css/Pagination.css';

const Pagination = () => {
  const jobData = useContext(Jobcontext);
  const { postsPerPage, jobs, paginate } = jobData;
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(jobs.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="pagination">
      <ul className="page__list">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className="page__item"
            onClick={() => paginate(number)}
          >
            <Link className="page__link">{number}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
