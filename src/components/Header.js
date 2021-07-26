import React, { useContext, useState } from 'react';
import Jobcontext from '../utils/Jobcontext';
import DropDown from './DropDown';
import '../css/Header.css';

const Header = () => {
  const [input, setInput] = useState('');
  const jobData = useContext(Jobcontext);
  const { setParams, setCurrentPage, setPages } = jobData;

  const handleParamChange = (e) => {
    // this does not work on form because the e.target is not an input
    if (e.keyCode === 13) {
      e.preventDefault();
      const value = e.target.value;
      const param = e.target.name;
      setCurrentPage(1);
      setPages([1, 2, 3]);
      setParams((prevParams) => ({ ...prevParams, [param]: value }));
    }
  };

  return (
    <div className="header">
      <div className="banner">
        <h1>Remote Optimal</h1>
        <p>You decide where to work and live</p>
        <div className="forms">
          <form className="form">
            <input
              type="text"
              placeholder="Title, companies, expertise, or benefits"
              value={input}
              name="search"
              onChange={(e) => {
                setInput(e.target.value);
              }}
              onKeyDown={handleParamChange}
            />
          </form>
          <DropDown />
        </div>
      </div>
    </div>
  );
};

export default Header;
