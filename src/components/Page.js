import React, { useState, useContext } from 'react';
import Jobcontext from '../utils/Jobcontext';
import Link from './Link';
import '../css/Page.css';

const Page = () => {
  const [pages, setPages] = useState([1, 2, 3]);
  const jobData = useContext(Jobcontext);
  const { currentPage, setCurrentPage } = jobData;

  const switchPage = (e) => {
    setCurrentPage(parseInt(e.target.innerText));
  };

  return (
    <nav className="page__nav">
      <ul className="page__list">
        <li className="prev__page page__item">
          <i className="fas fa-angle-left"></i>
        </li>

        {pages.map((page) => (
          <li className="page__item" onClick={switchPage} key={page}>
            <Link>{page}</Link>
          </li>
        ))}

        <li className="next__page page__item">
          <i className="fas fa-angle-right"></i>
        </li>
      </ul>
    </nav>
  );
};

export default Page;
