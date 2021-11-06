import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import MyJobsHeader from './components/MyJobsHeader';
import SavedJobs from './pages/SavedJobs';
import Login from './pages/Login';
import JobDetails from './pages/JobDetails';

import './css/App.css';

const App = () => {
  // function decode_utf8(s) {
  //   return decodeURIComponent(escape(s));
  // }
  // useEffect(() => {
  //   const cancelToken = axios.CancelToken.source();
  //   axios
  //     .get('https://remoteok.io/api', {
  //       cancelToken: cancelToken.token,
  //       params: { tags: params },
  //     })
  //     .then((res) => res.data.slice(1))
  //     .then((data) => {
  //       data.forEach(
  //         (item) => (item.description = decode_utf8(item.description)),
  //       );
  //       setJobs(data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  //   return () => {
  //     cancelToken.cancel();
  //   };
  // }, [params, currentPage]);

  return (
    <Router>
      <Route exact path="/" render={(props) => <Home {...props} />} />
      <Route path="/jobs/:id" render={(props) => <JobDetails {...props} />} />
      <Route path="/login" render={(props) => <Login {...props} />} />
      <Route
        path="/savedJobs"
        render={(props) => {
          return (
            <>
              <MyJobsHeader {...props} />
              <SavedJobs {...props} />
            </>
          );
        }}
      />
    </Router>
  );
};

export default App;
