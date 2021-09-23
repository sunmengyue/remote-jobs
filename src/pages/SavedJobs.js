import React, { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Jobcontext from '../utils/Jobcontext';
import SavedJobItem from '../components/SavedJobItem';

const SavedJobs = () => {
  const jobData = useContext(Jobcontext);
  const { savedJobs } = jobData;

  const listSavedJobs = () => {
    if (savedJobs.length > 0) {
      return savedJobs.map((job) => (
        <div key={uuidv4()}>{!job.isApplied && <SavedJobItem job={job} />}</div>
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

export default SavedJobs;
