import React, { useState, useContext } from 'react';
import Jobcontext from '../utils/Jobcontext';
import Link from './Link';
import '../css/Page.css';

const Page = () => {
  const jobData = useContext(Jobcontext);
  const { pages, setPages, jobs, setCurrentPage, postsPerPage, currentPage } =
    jobData;
  const lastPage = Math.ceil(jobs.length / postsPerPage);

  // helper function for left and right arrows
  const handleNext = () => {
    pages[2] <= lastPage &&
      setPages(() => {
        return pages.map((page) => page + 1);
      });
  };

  const handleBefore = () => {
    pages[0] > 1 &&
      setPages(() => {
        return pages.map((page) => page - 1);
      });
  };

  const goToNext = () => {
    handleNext();
    currentPage < lastPage && setCurrentPage(currentPage + 1);
  };

  const goBack = () => {
    handleBefore();
    currentPage > 1 && setCurrentPage(currentPage - 1);
  };

  const switchPage = (e) => {
    let pageClicked = parseInt(e.target.innerText);
    setCurrentPage(pageClicked);
    if (pageClicked === pages[2]) {
      handleNext();
    } else if (pageClicked === pages[0]) {
      handleBefore();
    }
  };

  return (
    <nav className="page__nav">
      <ul className="page__list">
        <li className="prev__page page__item" onClick={goBack}>
          <i className="fas fa-angle-left"></i>
        </li>

        {pages.map((page) => (
          <li
            className={
              page === currentPage
                ? `page__item page__item__active`
                : `page__item`
            }
            onClick={switchPage}
            key={page}
          >
            <Link>{page}</Link>
          </li>
        ))}

        <li className="next__page page__item" onClick={goToNext}>
          <i className="fas fa-angle-right"></i>
        </li>
      </ul>
    </nav>
  );
};

export default Page;
