import React from 'react';
import '../css/Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="banner">
        <h1>Remote Optimal</h1>
        <p>You decide where to work and live</p>
        <form>
          <input
            type="text"
            placeholder="Title, companies, expertise, or benefits"
          />
        </form>
      </div>
    </div>
  );
};

export default Header;
