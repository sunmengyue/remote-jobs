import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import MyJobsHeader from './components/MyJobsHeader';
import AppliedJobs from './pages/AppliedJobs';
import Login from './pages/Login';
import { Provider } from 'react-redux';
import store from './store';
import './css/App.css';

const App = () => {
  // fetch data
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
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" render={(props) => <Home {...props} />} />
          <Route path="/login" render={(props) => <Login {...props} />} />
          <Route
            path="/saved"
            render={(props) => {
              return (
                <>
                  <MyJobsHeader {...props} />
                  <AppliedJobs {...props} />
                </>
              );
            }}
          />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
