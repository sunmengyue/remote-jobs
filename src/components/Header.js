import React, { useContext } from 'react';
import Jobcontext from '../utils/Jobcontext';
import '../css/Header.css';

const Header = () => {
  const jobData = useContext(Jobcontext);
  const { params, setParams, setCurrentPage } = jobData;

  const handleParamChange = (e) => {
    const value = e.target.value;
    const param = e.target.name;
    setCurrentPage(1);
    setParams((prevParams) => ({ ...prevParams, [param]: value }));
  };

  return (
    <div className="header">
      <div className="banner">
        <h1>Remote Optimal</h1>
        <p>You decide where to work and live</p>
        <form>
          <input
            type="text"
            placeholder="Title, companies, expertise, or benefits"
            value={params.search}
            name="search"
            onChange={handleParamChange}
          />
        </form>
      </div>
    </div>
  );
};

export default Header;
