import React, { useContext } from 'react';
import Jobcontext from '../utils/Jobcontext';

const Link = ({ className, to, children }) => {
  const jobData = useContext(Jobcontext);
  const { popState } = jobData;

  const onClick = (e) => {
    e.preventDefault();
    window.history.pushState({}, '', to);
    popState();
  };

  return (
    <a onClick={onClick} className={className} href={to}>
      {children}
    </a>
  );
};

export default Link;
