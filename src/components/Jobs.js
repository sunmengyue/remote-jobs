import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getJobs } from '../actions/jobActions';
import { Link } from 'react-router-dom';
import Job from './Job';
import Page from './Page';
import '../css/Jobs.css';

const Jobs = ({ job: { jobs, loading }, getJobs }) => {
  useEffect(() => {
    getJobs();
  }, []);

  // pagination
  const initialSaves = JSON.parse(localStorage.getItem('jobs')) || [];
  const [savedJobs, setSavedJobs] = useState(initialSaves);
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState([1, 2, 3]);
  const [postsPerPage] = useState(10);

  const lastPostIdx = currentPage * postsPerPage;
  const firstPostIdx = lastPostIdx - postsPerPage;
  const currentPosts = jobs.slice(firstPostIdx, lastPostIdx);
  // For the 3rd page mark as applied button
  const markAsApplied = (id) => {
    const updatedSavedJobs = savedJobs.map((job) =>
      job.id === id ? { ...job, isApplied: true } : job,
    );
    setSavedJobs(updatedSavedJobs);
  };

  const listJobs = () =>
    // currentPosts.map((job) => <Job job={job} key={job.id} />);
    jobs.slice(1).map((job) => <Job job={job} key={job.id} />);

  if (loading || jobs === []) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="jobs">
      <Link to="/jobs/saved" className="saved__jobs">
        {savedJobs.length ? (
          <i className="fas fa-folder fa-2x"></i>
        ) : (
          <i className="far fa-folder fa-2x"></i>
        )}
        <h3> My Saved Jobs : {savedJobs.length} </h3>
      </Link>
      <div className="job__list">{listJobs()}</div>
      <Page />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    job: state.job,
  };
};

export default connect(mapStateToProps, { getJobs })(Jobs);
