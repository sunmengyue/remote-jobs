import React from 'react';
import DropDown from './DropDown';
import { connect } from 'react-redux';
import '../css/Header.css';
import logo from '../images/remote_optimal_logo.png';

const Header = ({ job: { jobs, loading } }) => {
  // const handleParamChange = (e) => {
  //   e.preventDefault();
  //   setCurrentPage(1);
  //   setPages([1, 2, 3]);
  //   setParams(e.target.value);
  // };

  const preventRefresh = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
    }
  };

  return (
    <div className="header z-50">
      <div className="banner">
        {/* <div className="header__right">
          <img src={user?.photoURL} alt={user?.displayName} />
        </div> */}
        <div className="logo">
          <img src={logo} alt="logo" />
          <h1>
            Remote <span>Optimal</span>
          </h1>
        </div>
        <p>You decide where to work and live</p>
        <div className="search__results">
          {/* {jobs.length ? `results: ${jobs.length} jobs` : `Loading...`} */}
        </div>
        <div className="forms">
          <form className="form">
            <input
              onFocus={(e) => (e.target.value = '')}
              type="text"
              placeholder="Career fields, separate with ',' "
              // value={params}
              name="tags"
              // onChange={handleParamChange}
              onKeyDown={preventRefresh}
            />
          </form>
          <DropDown />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    job: state.job,
  };
};

export default connect(mapStateToProps)(Header);
