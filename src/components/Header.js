import axios from 'axios';
import React, { useState, useContext } from 'react';
import Jobcontext from '../utils/Jobcontext';
import '../css/Header.css';
import Job from './Job';

const Header = () => {
  const jobData = useContext(Jobcontext);
  const { searchJob, input, setInput } = jobData;

  const handleChange = (e) => {
    setInput(e.target.value, () => {
      searchJob(input);
    });
  };

  const handleSubmit = () => {
    searchJob(input);
  };

  return (
    <div className="header">
      <div className="banner">
        <h1>Remote Optimal</h1>
        <p>You decide where to work and live</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title, companies, expertise, or benefits"
            value={input}
            onChange={handleChange}
          />
        </form>
      </div>
    </div>
  );
};

export default Header;
