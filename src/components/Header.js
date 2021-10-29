import React, { useContext } from 'react';
import Jobcontext from '../utils/Jobcontext';
import DropDown from './DropDown';
import '../css/Header.css';
import logo from '../images/remote_optimal_logo.png';

const Header = () => {
  const jobData = useContext(Jobcontext);
  const { params, setParams, setCurrentPage, setPages, input, setInput } =
    jobData;

  const handleParamChange = (e) => {
    e.preventDefault();
    setCurrentPage(1);
    setPages([1, 2, 3]);
    setParams(e.target.value);
  };

  const preventRefresh = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
    }
  };

  return (
    <div className="header">
      <div className="banner">
        <div className="logo">
          <img src={logo} alt="logo" />
          <h1>
            Remote <span>Optimal</span>
          </h1>
        </div>
        <p>You decide where to work and live</p>
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
