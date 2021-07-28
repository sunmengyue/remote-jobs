import React, { useContext } from 'react';
import Jobcontext from '../utils/Jobcontext';
import SavedJobItem from '../components/SavedJobItem';

const SavedJobs = () => {
  const jobData = useContext(Jobcontext);
  const { savedJobs, filteredSaves } = jobData;

  const listSavedJobs = () => {
    if (savedJobs.length) {
      return filteredSaves.map((job) => {
        return <SavedJobItem job={job} key={job.id} />;
      });
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
