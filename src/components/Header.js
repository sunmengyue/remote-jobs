import React, { useContext } from 'react';
import Jobcontext from '../utils/Jobcontext';
import DropDown from './DropDown';
import '../css/Header.css';
import logo from '../images/remote_optimal_logo.png';

const Header = () => {
  const jobData = useContext(Jobcontext);
  const { params, jobs, setParams, setCurrentPage, setPages } = jobData;

  const handleParamChange = (e) => {
    // this does not work on form because the e.target is not an input
    e.preventDefault();
    const value = e.target.value;
    const param = e.target.name;
    setCurrentPage(1);
    setPages([1, 2, 3]);
    setParams({ [param]: value, category: '' });
  };

  const preventRefresh = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
    }
  };

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
          <form className="form">
            <input
              onFocus={(e) => (e.target.value = '')}
              type="text"
              placeholder="Career fields, separate with ',' "
              value={params}
              name="tags"
              onChange={handleParamChange}
              onKeyDown={preventRefresh}
            />
          </form>
          <DropDown />
        </div>
      </div>
    </div>
  );
};

export default Header;
