import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getJobDetails } from '../actions/jobActions';
import '../css/JobDetails.css';
import logo from '../images/remote_optimal_logo.png';

const JobDetails = ({ jobDetails, job, getJobDetails }) => {
  // const { jobs, savedJobs, setSavedJobs } = jobdata;
  const jobId = parseInt(
    window.location.pathname.substring(
      window.location.pathname.lastIndexOf('/') + 1,
    ),
  );

  useEffect(() => {
    getJobDetails(jobId);
  }, []);

  // const saveJob = (id) => {
  //   if (!savedJobs.find((job) => job.id === id)) {
  //     setSavedJobs([...savedJobs, { ...jobDetails.job, isApplied: false }]);
  //   }
  //   if (savedJobs.find((job) => job.id === id)) {
  //     setSavedJobs(() => {
  //       return savedJobs.filter((job) => job.id !== jobId);
  //     });
  //   }
  // };

  return (
    // <div className="page">
    //   <Link className="toHome" to="/">
    //     <img src={logo} alt="logo" />
    //     <h1>
    //       Remote <span>Optimal</span>
    //     </h1>
    //   </Link>
    //   <div className="job__details">
    //     <div className="control">
    //       <Link className="back" to="/">
    //         <i className="fas fa-arrow-circle-left"></i>
    //         <p>back to search</p>
    //       </Link>
    //       {/* <Link to="/jobs/saved" className="saved__jobs">
    //         {savedJobs.length ? (
    //           <i className="fas fa-folder fa-2x"></i>
    //         ) : (
    //           <i className="far fa-folder fa-2x"></i>
    //         )}
    //         <h3> My Saved Jobs : {savedJobs.length} </h3>
    //       </Link> */}

    //       <div className="action">
    //         <a
    //           className="apply"
    //           href={`${jobDetails.job.url}`}
    //           target="_blank"
    //           rel="noopener noreferrer"
    //         >
    //           Apply
    //         </a>
    //         {/* <button
    //           className="save"
    //           to="/jobs/saved"
    //           onClick={() => {
    //             saveJob(jobDetails.job.id);
    //           }}
    //           style={
    //             savedJobs.find((job) => job.id === jobDetails.job.id)
    //               ? { color: '#de3163' }
    //               : { color: '#003d80' }
    //           }
    //         >
    //           <i className="fas fa-bookmark fa-lg"></i>
    //           {savedJobs.find((job) => job.id === jobDetails.job.id) ? 'Saved' : 'Save'}
    //         </button> */}
    //       </div>
    //     </div>
    //     <div className="jobinfo">
    //       <div className="jobinfo__header">
    //         <h2>{jobDetails.job.position}</h2>
    //         <div className="post__time">
    //           <i className="fas fa-clock"></i>
    //           <p>{jobDetails.job.date.slice(0, 10)}</p>
    //         </div>
    //         <div className="logo">
    //           {jobDetails.job.logo ? (
    //             <img
    //               src={`${jobDetails.job.logo}`}
    //               alt="logo"
    //               className="company__logo"
    //             />
    //           ) : (
    //             <i className="fas fa-building fa-3x"></i>
    //           )}
    //           <div className="job__companyInfo">
    //             <p className="job__companyName">{jobDetails.job.company}</p>
    //             <p className="job__companyLocation">
    //               {jobDetails.job.location}
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //       <div
    //         className="jobinfo__content"
    //         dangerouslySetInnerHTML={{ __html: jobDetails.job.description }}
    //       ></div>
    //     </div>
    //   </div>
    // </div>
    <div>{jobDetails.job.position}</div>
  );
};

const mapStateToProps = (state) => {
  return {
    job: state.job,
    jobDetails: state.jobDetails,
  };
};

export default connect(mapStateToProps, { getJobDetails })(JobDetails);
