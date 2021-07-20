import React from 'react';
import { Link } from 'react-router-dom';
import '../css/SubHeader.css';

const SubHeader = () => {
  return (
    <div>
      <div className="saved">
        <Link to="/jobs/save">Saved Jobs 6</Link>
      </div>
    </div>
  );
};

export default SubHeader;
