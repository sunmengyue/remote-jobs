import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';
import { getSavedJobs } from '../actions/jobActions';
import SavedJobItem from '../components/SavedJobItem';

const SavedJobs = ({ savedJobList: { savedJobs, loading }, getSavedJobs }) => {
  useEffect(() => {
    getSavedJobs();
  }, []);

  const listSavedJobs = () => {
    if (savedJobs.length > 0) {
      return savedJobs.map((job) => (
        <>{!job.isApplied && <SavedJobItem job={job} key={uuidv4()} />}</>
      ));
    } else {
      return (
        <h3 style={{ fontWeight: '400' }}>
          <i
            className="far fa-folder-open fas-2x"
            style={{ marginRight: '10px', color: 'rgba(202, 23, 128, 0.8)' }}
          ></i>
          You have not saved any job yet...
        </h3>
      );
    }
  };

  return <div className="page">{listSavedJobs()}</div>;
};

const mapStateToProps = (state) => {
  return {
    savedJobList: state.savedJobList,
  };
};

export default connect(mapStateToProps, { getSavedJobs })(SavedJobs);
