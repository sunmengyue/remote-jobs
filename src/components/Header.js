import React, { useContext } from 'react';
import Jobcontext from '../utils/Jobcontext';
import DropDown from './DropDown';
import '../css/Header.css';
import logo from '../images/remote_optimal_logo.png';

const Header = () => {
  const jobData = useContext(Jobcontext);
  const { jobs } = jobData;

  return (
    <div className="header z-50">
      <div className="banner">
        <div className="logo">
          <img src={logo} alt="logo" />
          <h1>
            Remote <span>Optimal</span>
          </h1>
        </div>
        <p>You decide where to work and live</p>
        <div className="search__results">
          {jobs.length ? `results: ${jobs.length} jobs` : `Loading...`}
        </div>
        <div className="forms">
          <DropDown />
        </div>
      </div>
    </div>
  );
};

export default Header;
