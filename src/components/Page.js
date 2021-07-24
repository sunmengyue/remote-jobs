import React, { useState } from 'react';
import Link from './Link';
import '../css/Page.css';

const Page = () => {
  const [pages, setPages] = useState([1, 2, 3]);
  const [activePage, setActivePage] = useState(1);

  return (
    <nav className="page__nav">
      <ul className="page__list">
        <li className="prev__page page__item">
          <i class="fas fa-angle-left"></i>
        </li>

        {pages.map((page) => (
          <li className="page__item">
            <Link>{page}</Link>
          </li>
        ))}

        <li className="next__page page__item">
          <i class="fas fa-angle-right"></i>
        </li>
      </ul>
    </nav>
  );
};

export default Page;
