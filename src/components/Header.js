import React from 'react';
import '../css/Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="banner">
        <h1>Remote Optimal</h1>
        <p>You decide where to live and work</p>
        <form>
          <input
            type="text"
            placeholder="Title, companies, expertise, or benefits"
          />
          <i className="fas fa-briefcase"></i>
        </form>
      </div>
    </div>
  );
};

export default Header;
